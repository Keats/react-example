import Immutable from "immutable";

import {
  CREATE_LIST, CREATE_CARD,
} from "../constants/actionTypes";


export const List = Immutable.Record(
  {
    id: -1,
    name: "Unknown",
    cards: Immutable.List(),
  },
);
const initialState = Immutable.Map();


function createList(state, payload) {
  return state.set(payload.id, new List(payload));
}


function createCard(state, payload) {
  const { id, listId } = payload;
  return state.updateIn([listId, "cards"], cards => cards.push(id));
}


export default function lists(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST:
      return createList(state, action.payload);
    case CREATE_CARD:
      return createCard(state, action.payload);
    default:
      return state;
  }
}

export function getAllLists(state) {
  return state.lists.toList();
}
