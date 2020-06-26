import React from 'react'

import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.onAddPost();
  };

  const PostChange = () => {
    let textPost = newPostElement.current.value;
    props.onUpdateNewPostText(textPost);
  };

  const postsElements = props.posts.map((post) => <Post key={post.id}
                                                        id={post.id}
                                                        message={post.message}
                                                        likes={post.likesCount}
                                                        img={post.img}
  />);

  return (
    <div className={style.posts}>
      <h4>My posts</h4>
      <div>
        <textarea onChange={PostChange} className={style.postArea} ref={newPostElement}
                  value={props.newPostText}/>
        <button onClick={addPost} className={style.btnPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
}
export default MyPosts;