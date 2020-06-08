import React from 'react';
import s from './Profile.module.css'

const Profile = ()=>{
  return (
    <div className={s.content}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZFET3IBGGG6MRW_ykFqpgYyAo2dJ65SvtxUQJjc-8pmZPYpeU&usqp=CAU'/>
      <div>Walter White 53y.o.</div>
    </div>
  );
}

export default Profile;