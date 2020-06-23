import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElement = props.posts.map(post => <Post message={post.message} />);

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = ()=>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
  }
  return (
    <div>
      <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} /><br />
      <button onClick={onAddPost}>Добавить новость</button>
      <hr />
      {postsElement}
    </div>
  );
}

export default MyPosts;