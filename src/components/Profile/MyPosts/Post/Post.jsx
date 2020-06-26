import React from 'react';

import style from './Post.module.css'

export const Post = (props) => {
  return (
    <div className={style.block}>
      <div className={style.itemPost}>
        <img src={props.img}
             alt="avatar"/>
        <div className={style.post}>{props.message}</div>
      </div>
      <div>
        <span>Like: {props.likes}</span>
      </div>
    </div>
  );
}
