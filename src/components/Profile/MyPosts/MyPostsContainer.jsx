import React from 'react';
import {addPostActionCreator, handleChangePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPost,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text)=>{
            let action = handleChangePostActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;