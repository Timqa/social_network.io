import React from 'react';

import style from './MyPosts.module.css';
import { Post } from './Post/Post';
import { DialogsMessageFormRedux } from '../../FormMessages/FormMessages';

const MyPosts = (props) => {
  const addNewMessage = (values) => {
    props.onAddPost(values.newMessageBody);
  };

  const postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likes={post.likesCount}
      img={post.img}
    />
  ));

  return (
    <div className={style.posts}>
      <h4>My posts</h4>
      <div>
        <DialogsMessageFormRedux
          onSubmit={addNewMessage}
        />
      </div>
      {postsElements}
    </div>
  );
};
export default MyPosts;
