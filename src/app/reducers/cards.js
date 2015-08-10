import Immutable from "immutable";

import {
  CREATE_CARD
} from "../constants/actionTypes";


const Card = Immutable.Record({id: -1, name: "Unknown"});
const initialState = Immutable.fromJS({});


function createCard(state, payload) {
  const { columnId, id, name} = payload;
  const card = new Card({id, name});
  const columnCards = state.get(columnId) || Immutable.List();
  return state.set(columnId, columnCards.push(card));
}

export default function cards(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action.payload);
    default:
      return state;
  }
}
