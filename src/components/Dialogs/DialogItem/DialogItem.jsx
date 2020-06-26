import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={`/dialogs/${props.id}`}><img className={style.ava} src={props.img} alt="asd"/>{props.name}</NavLink>
    </div>
  )
};

export default DialogItem;