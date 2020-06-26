import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS
} from "./types";
import {usersAPI} from "../../api/api";

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isProgressFollow: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}  // меняем у user'a одно поле: followed и кладем обратно в state
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}  // меняем у user'a одно поле: followed и кладем обратно в state
          }
          return user;
        })
      };
    case SET_USERS:
      return {...state, users: action.users}; // меняем (если в action.users пришли другие users) / дописываем (если в action.users старые + новые users) user'ов и кладем обратно в стайте
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isProgressFollow: action.isProgressFollow
          ? [...state.isProgressFollow, action.userId]
          : state.isProgressFollow.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgressAC = (isProgressFollow, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isProgressFollow,
  userId
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalCountAC(data.totalCount));
    })
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgressAC(true, userId));
    usersAPI.followAPI(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId))
      }
      dispatch(toggleIsFollowingProgressAC(false, userId));
    })
  }
}

export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgressAC(true, userId));
    usersAPI.unFollowAPI(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unFollowAC(userId))
      }
      dispatch(toggleIsFollowingProgressAC(false, userId));
    })
  }
}