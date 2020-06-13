import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo';

const Profile = (props)=>{
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;