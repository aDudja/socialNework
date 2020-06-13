import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = ()=>{
  return (
    <div className={s.profile}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZFET3IBGGG6MRW_ykFqpgYyAo2dJ65SvtxUQJjc-8pmZPYpeU&usqp=CAU' />
      <div>Walter White 53y.o.</div>
    </div>
  );
}

export default ProfileInfo;