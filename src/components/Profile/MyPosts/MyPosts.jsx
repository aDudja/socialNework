import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props)=>{

const postsElement = props.posts.map(post=><Post message={post.message}/>);

  return (
      <div>
        {postsElement}
      </div>
  );
}

export default MyPosts;