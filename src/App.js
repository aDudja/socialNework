import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route } from 'react-router-dom';
import store  from './redux/state';


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
            <Route path='/profile' render={
                () => <Profile
                       state={props.state.profilePage}
                       dispatch = {props.dispatch}
                   />
                }
            />

          <Route path='/dialogs' render={
              ()=> <Dialogs state={props.state.messagesPage}
                            dispatch = {props.dispatch}
              /> } />
        </div>
      </div>
  )
}

export default App;