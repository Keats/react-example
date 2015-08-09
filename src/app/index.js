import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import ListContainer from "./components/listContainer";


class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hi!</p>
        <ListContainer />
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>{() => <App />}</Provider>,
  document.getElementById("container")
);
