import {SET_USER_DATA} from "./types";
import {authAPI} from "../../api/api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
          dispatch(setAuthUserDataAC(id, email, login));
        }
      })
  }
}