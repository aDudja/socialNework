import React from 'react';
import s from './Header.module.css';

const Header = ()=>{
  return (
    <header className={s.header}>
      <img src='https://www.remax.com/browser-logos/edge.svg'></img>
    </header>
  );
}

export default Header;