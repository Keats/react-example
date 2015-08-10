import {
  createStore, applyMiddleware, combineReducers
} from "redux";
import { routerStateReducer } from "redux-react-router";
import thunk from "redux-thunk";
import * as reducers from "./reducers/index";


const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers,
});
const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(reducer);


