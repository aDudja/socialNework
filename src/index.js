import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ========================================

const postsData = [
  {id: 1, message: 'Привет как дела?'},
  {id: 2, message: 'Я застряла у тебя в паутине...'},
  {id: 3, message: 'Как вылезти?'},
];
const dialogsData = [
  {id: 1, name: 'Anton'},
  {id: 2, name: 'Alina'},
  {id: 3, name: 'Svetlana'},
];
const messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hello'},
  {id: 3, message: '???'},
]

// ========================================

ReactDOM.render(
  <App posts={postsData} dialogs={dialogsData} messages={messagesData} />,
  document.getElementById('root')
);