import { expect } from "chai";
import Immutable from "immutable";

import {
  CREATE_CARD
} from "../../app/constants/actionTypes";
import cards from "../../app/reducers/cards";


describe("Reducers: cards", () => {
  it("should have empty initial state", () => {
    expect(cards(undefined, {})).to.equal(Immutable.Map());
  });

  it("should handle CREATE_CARD", () => {
    const card = {id: 42, name: "Testing"};
    const action = {type: CREATE_CARD, payload: card};
    const state = cards(undefined, action).toJS();

    expect(state[card.id]).to.deep.equal(card);
  });

  it("should handle unknown actions", () => {
    expect(cards(undefined, {type: "HEY"})).to.equal(Immutable.Map());
  });
});
