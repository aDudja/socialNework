import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


// ========================================



const Game = ()=>{
  return ( 
  <div className='app-wrapper'>
    <Header/>
    <Navbar/>
    <Profile/>
  </div> 
  )
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
