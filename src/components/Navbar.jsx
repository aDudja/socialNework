import React from 'react';
import s from './Navbar.module.css';

const Navbar = ()=>{
  return (
    <nav className={s.nav}>
      <ul>
        <li>Друзья</li>
        <li>Сообщения</li>
        <li>Группы</li>
      </ul>
    </nav>
  );
}

export default Navbar;