import React, { PropTypes } from "react";
import ReactDom from "react-dom";
import { Router, Route, Link } from "react-router";
import { history } from "react-router/lib/BrowserHistory";
import { reduxRouteComponent } from "redux-react-router";

import store from "./store";
import ListContainer from "./components/listContainer";


class App extends React.Component {
  renderDevTools() {
    if (__PRODUCTION__) {
      return null;
    }

    const { DevTools, DebugPanel, LogMonitor } = require("redux-devtools/lib/react");
    return (
      <DebugPanel top right bottom key="debugPanel">
        <DevTools store={store} monitor={LogMonitor}/>
      </DebugPanel>
    );
  }

  render() {
    let content = <ListContainer />;
    if (this.props.children) {
      content = <p>Check the github repo: https://github.com/Keats/react-example</p>;
    }
    return (
      <div>
        <h1>A fake kanban app</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr/>
        {content}
        {this.renderDevTools()}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

const routes = (
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route path="/" component={App}>
        <Route path="about" component={App} />
      </Route>
    </Route>
  </Router>
);

ReactDom.render(routes, document.getElementById("container"));
