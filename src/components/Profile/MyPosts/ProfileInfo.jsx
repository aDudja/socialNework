import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatusWithUseState from "./ProfileStatusWithUseState";
import noPhoto from "../../../img/nophoto.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div className={s.profile}>
            <img src={profile.photos.large == null ? noPhoto : profile.photos.large} className={s.avatar}/>
            <div>{isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}</div>
            <ProfileStatusWithUseState status={status} updateStatus={updateStatus}/>
            {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData profile={profile} isOwner={isOwner} toEditMode={()=>setEditMode(true)}/> }
        </div>
    );
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div>
        {isOwner &&
        <div><button onClick={toEditMode}>Редактировать</button></div>
        }
        <div>
            <b>Логин:</b> {profile.fullName}
        </div>
        <div>
            <b>В поисках работы:</b> {profile.lookingForAJob ? 'Да' : 'Нет'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>Мои проффесиональные навыки:</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>Обо мне:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>&#8195;{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;