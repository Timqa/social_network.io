import React from 'react';
import style from './Users.module.css';
import icon from '../../assets/img/avatar-user.svg';
import { NavLink } from 'react-router-dom';

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const userPagination = pages.map((page) => (
    <span
      key={page}
      onClick={() => props.onPageChanged(page)}
      className={props.currentPage === page ? style.activePage : null}>
      {page}
    </span>
  ));

  return (
    <div className={style.usersContainer}>
      <div className={style.paginationContainer}>{userPagination}</div>
      <div className={style.usersWrapp}>
        {props.users.map((user) => {
          return (
            <div key={user.id} className={style.userCard}>
              <div className={style.userImg}>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    src={
                      user.photos.small === null || user.photos.large === null
                        ? icon
                        : user.photos.small || user.photos.large
                    }
                    alt="userFoto"
                  />
                </NavLink>
              </div>
              <div className={style.userDescription}>
                <div className={style.userNameStatus}>
                  <div className={style.userName}>{user.name}</div>
                  <div className={style.userStatus}>
                    {user.status === null ? 'boss' : user.status}
                  </div>
                </div>
                <div className={style.userLocation}>
                  <div className={style.userCountry}>{'user.location.country'}</div>
                  <div className={style.userCity}>{'user.location.city'}</div>
                </div>
              </div>
              {user.followed ? (
                <button
                  disabled={props.isProgressFollow.some((id) => id === user.id)}
                  onClick={() => {
                    props.onUnFollow(user.id);
                  }}
                  className={style.userFollowed}>
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.isProgressFollow.some((id) => id === user.id)}
                  onClick={() => {
                    props.onFollow(user.id);
                  }}
                  className={style.userFollowed}>
                  follow
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className={style.paginationContainer}>{userPagination}</div>
    </div>
  );
};
