import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ReduxRouter } from "redux-router";
// IE doesn't have Promise yet so we need to polyfill it
if (typeof window.Promise !== "function") {
  require("es6-promise").polyfill();
}

import configureStore from "./store";

import routes from "./routes";

const store = configureStore();


class Root extends React.Component {
  renderDevTools() {
    if (__PRODUCTION__) {
      return null;
    }

    const { DevTools, DebugPanel, LogMonitor } = require("redux-devtools/lib/react");
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor}/>
      </DebugPanel>
    );
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </Provider>
        {this.renderDevTools()}
      </div>
    );
  }
}

ReactDom.render(<Root />, document.getElementById("container"));
