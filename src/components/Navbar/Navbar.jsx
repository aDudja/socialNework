import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
  return (
    <nav className={s.nav}>
      <ul>
        <li><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
        <li><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Navbar;