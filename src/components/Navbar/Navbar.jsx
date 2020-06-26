import React from 'react';
import { NavLink } from "react-router-dom";

import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink className={style.item} activeClassName={style.active} to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.active} to="/dialogs">Dialogs</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.active} to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.active} to="/news">News</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.active} to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink className={style.item} activeClassName={style.active} to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;