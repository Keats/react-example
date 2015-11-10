import {
  CREATE_CARD,
} from "../constants/actionTypes";


let sequence = 0;

export function addCard(listId, name) {
  const id = sequence;
  sequence++;

  return {
    type: CREATE_CARD,
    payload: {
      listId,
      id,
      name,
    },
  };
}
