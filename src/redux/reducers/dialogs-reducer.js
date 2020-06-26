import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./types";

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
  ],
  newMessageBody: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state, newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
     if (state.newMessageBody !== '') {
       return {
         ...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]
       }
     }
     return state
    default:
      return state;
  }
};

export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyAC = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body
  }
}