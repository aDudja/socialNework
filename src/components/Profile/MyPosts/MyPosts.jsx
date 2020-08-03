import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10);

let addNewPostForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"} component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]} /><br />
            <button>Добавить новость</button>
        </form>
}

let АddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(addNewPostForm);

const MyPosts = (props) => {
    const postsElement = props.posts.map(post => <Post message={post.message} />);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return ( <>
            <АddNewPostFormRedux onSubmit={onAddPost}/>
            <hr />
            {postsElement}
        </>
    );
}
export default MyPosts;