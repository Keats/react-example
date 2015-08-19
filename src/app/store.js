import {
  createStore, applyMiddleware, combineReducers, compose
} from "redux";
import { routerStateReducer } from "redux-react-router";
import thunk from "redux-thunk";
import * as reducers from "./reducers/index";


const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers,
});
const middlewares = [thunk];


let finalCreateStore;

if (__PRODUCTION__) {
  finalCreateStore = applyMiddleware(...middlewares)(createStore);
} else {
  const { devTools, persistState } = require("redux-devtools");
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
}
export default finalCreateStore(reducer);


