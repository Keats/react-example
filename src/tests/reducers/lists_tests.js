import { expect } from "chai";
import Immutable from "immutable";

import {
  CREATE_LIST, CREATE_CARD
} from "../../app/constants/actionTypes";
import lists, { List } from "../../app/reducers/lists";


describe("Reducers: lists", () => {
  it("should have empty initial state", () => {
    expect(lists(undefined, {})).to.equal(Immutable.Map());
  });

  it("should handle CREATE_LIST", () => {
    const list = {id: 42, name: "List"};
    const action = {type: CREATE_LIST, payload: list};
    const state = lists(undefined, action).toJS();
    const listFound = state[list.id];

    expect(listFound.id).to.equal(list.id);
    expect(listFound.name).to.equal(list.name);
    expect(listFound.cards).to.be.empty;
  });

  it("should handle CREATE_CARD", () => {
    const initialState = Immutable.fromJS({0: new List({id: 0})});
    const card = {id: 42, name: "Card", columnId: 0};
    const action = {type: CREATE_CARD, payload: card};
    const list = lists(initialState, action).toJS()[0];

    expect(list.cards).to.not.be.empty;
    expect(list.cards[0]).to.equal(card.id);
  });


  it("should handle unknown actions", () => {
    expect(lists(undefined, {type: "HEY"})).to.equal(Immutable.Map());
  });
});
