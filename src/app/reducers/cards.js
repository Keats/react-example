import Immutable from "immutable";

import {
  CREATE_CARD,
} from "../constants/actionTypes";


const Card = Immutable.Record({id: -1, name: "Unknown"});
const initialState = Immutable.Map();


function createCard(state, payload) {
  const { id, name } = payload;
  return state.set(id, new Card({id, name}));
}

export default function cards(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action.payload);
    default:
      return state;
  }
}

export function getListCards(state, cardIds) {
  if (cardIds.size === 0) {
    return Immutable.List();
  }
  return state.cards.filter(card => cardIds.indexOf(card.id) > -1).toList();
}
