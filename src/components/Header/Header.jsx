import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props)=>{
  return (
    <header className={s.header}>
      <img src='https://seeklogo.com/images/R/react-styleguidst-logo-5C3D736C4B-seeklogo.com.png'></img>
        <div className={s.loginBlock}>
            {props.isAuth
                ?<div>{props.login}<button onClick={props.logout}>Выйти</button></div>
                :<NavLink to={'/login'}><button>Войти</button></NavLink>}

        </div>
    </header>
  );
}

export default Header;