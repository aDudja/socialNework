import React from 'react';
import s from './Navbar.module.css';

const Navbar = ()=>{
  return (
    <nav className={s.nav}>
      <ul>
        <li><a href='/profile'>Profile</a></li>
        <li><a href='/dialogs'>Messages</a></li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Navbar;