import {
  createStore, applyMiddleware, combineReducers, compose,
} from "redux";
import {
  routerStateReducer,
  reduxReactRouter,
} from "redux-router";
import createHistory from "history/lib/createBrowserHistory";
import thunk from "redux-thunk";

import * as reducers from "./reducers/index";


const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers,
});

// Thunk middleware allows actions to return a function f instead of a
// new state. f accepts a `dispatch` and an optional `getState`
// function to invoke new actions. Used e.g. for async XHR actions.
// (https://github.com/gaearon/redux-thunk)
const middlewares = [thunk];

let finalCreateStore;

const reduxRouter = reduxReactRouter({ createHistory });

if (__PRODUCTION__) {
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    reduxRouter
  )(createStore);
} else {
  const { devTools, persistState } = require("redux-devtools");
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    reduxRouter,
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&])\b/))
  )(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
