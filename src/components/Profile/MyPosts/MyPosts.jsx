import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElement = props.posts.posts.map(post => <Post message={post.message} />);

  let newPostElement = React.createRef()
  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }
  let onPostChange = ()=>{
      let text = newPostElement.current.value;
      props.dispatch({type: 'HANDLE-CHANGE', text: text});
  }
  return (
    <div>
      <textarea onChange={onPostChange} value={props.posts.newPost} ref={newPostElement} /><br />
      <button onClick={addPost}>Добавить новость</button>
      <hr />
      {postsElement}
    </div>
  );
}

export default MyPosts;