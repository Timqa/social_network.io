import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        onUpdateUserStatus={props.onUpdateUserStatus}
      />
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;
