import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
  return (
    <header className={style.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
      <div className={style.loginBlock}>
        { isAuth ? login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;