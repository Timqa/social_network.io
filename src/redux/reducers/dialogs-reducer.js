import {SEND_MESSAGE} from "./types";

const initialState = {
  messages: [
    {id: 1, message: 'oloasdsadasdslo'},
    {id: 2, message: 'oloasdsadasdslo'},
    {id: 3, message: 'oloasdsadasdslo'},
    {id: 4, message: 'oloasdsadasdslo'}
  ],
  dialogs: [
    {id: 1, name: 'Timych', img: "https://www.svgrepo.com/show/7025/user.svg"},
    {id: 2, name: 'Dimych', img: "https://www.svgrepo.com/show/7025/user.svg"},
    {id: 3, name: 'Artemych', img: "https://www.svgrepo.com/show/7025/user.svg"},
    {id: 4, name: 'Ivan', img: "https://www.svgrepo.com/show/7025/user.svg"},
  ]
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state, messages: [...state.messages, {id: 6, message: body}]
      }
    default:
      return state;
  }
};

export const sendMessageAC = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}