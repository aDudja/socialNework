import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = ()=>{
  return (
    <div className={s.content}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZFET3IBGGG6MRW_ykFqpgYyAo2dJ65SvtxUQJjc-8pmZPYpeU&usqp=CAU'/>
      <div>Walter White 53y.o.</div>
      <textarea /><br/>
      <button>Добавить новость</button>
      <MyPosts />
    </div>
  );
}

export default Profile;