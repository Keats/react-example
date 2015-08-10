import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import ListContainer from "./components/listContainer";


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>A fake kanban app</h1>
        <ListContainer />
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>{() => <App />}</Provider>,
  document.getElementById("container")
);
