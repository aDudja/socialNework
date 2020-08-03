import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <img className={s.avatar} src={props.profile.photos.large}/>
            <div>ID: {props.profile.userId}</div>
            <div>Имя: {props.profile.fullName}</div>
            <div>Обо мне: {props.profile.aboutMe}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;