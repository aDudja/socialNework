import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;