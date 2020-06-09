import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ()=>{
  return (
      <div>
        <Post message='Привет как дела?'/>
        <Post message='Я застряла у тебя в паутине...' />
        <Post message='Как вылезти?' />
      </div>
  );
}

export default MyPosts;