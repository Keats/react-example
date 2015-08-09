import Immutable from "immutable";

import {
  CREATE_LIST, DELETE_LIST
} from "../constants/actionTypes";


const List = Immutable.Record({id: -1, name: "Unknown"});
const initialState = Immutable.fromJS({});


function createList(state, payload) {
  return state.set(payload.id, new List(payload));
}


export default function lists(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST:
      return createList(state, action.payload);
    case DELETE_LIST:
      return state;
    default:
      return state;
  }
}
