import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


// ========================================



const Game = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  )
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
