import {ADD_POST, SET_STATUS, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT} from "./types";
import {profileAPI} from "../../api/api";

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you',
      likesCount: 6,
      img: "https://www.svgrepo.com/show/7025/user.svg"
    },
    {
      id: 2,
      message: 'It\'s my first post',
      likesCount: 4,
      img: "https://www.svgrepo.com/show/7025/user.svg"
    }
  ],
  newPostText: 'it-kamasutraaaaa!',
  profile: null,
  status: ''
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText) {
        return {
          ...state,
          posts: [...state.posts, {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
            img: "https://www.svgrepo.com/show/7025/user.svg"
          }],
          newPostText: ''
        };
      } else {
        return state
      }
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.textPost}
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case  SET_STATUS:
      return {...state, status: action.status}
    default:
      return state;
  }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (textPost) => ({type: UPDATE_NEW_POST_TEXT, textPost})
export const setProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})

export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setProfileAC(data))
    })
  }
}

export const getUserStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatusAC(data))
    })
  }
}

export const updateUserStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0){
        dispatch(setStatusAC(status));
      }
    })
  }
}