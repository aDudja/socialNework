import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatusWithUseState from "./ProfileStatusWithUseState";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <img className={s.avatar} src={profile.photos.large}/>
            <div>ID: {profile.userId}</div>
            <div>Имя: {profile.fullName}</div>
            <div>Обо мне: {profile.aboutMe}</div>
            <ProfileStatusWithUseState status={status} updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;