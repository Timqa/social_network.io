import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = {
  onUpdateNewPostText: updateNewPostTextAC,
  onAddPost: addPostAC
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)