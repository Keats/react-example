import {
  createStore, applyMiddleware, combineReducers
} from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers/index";


const reducer = combineReducers(reducers);
const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(reducer);


