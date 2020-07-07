import React from 'react';
import style from './ProfileInfo.module.css';
import {Loader} from "../../common/Loader/Loader";
import avatar from './../../../assets/img/avatar-user.svg'
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader/>
  }

  return (
    <div className={style.profileInfo}>
      <div className={style.avatarka}>
        <img className={style.fon}
             src={props.profile.photos.large === null ? avatar : props.profile.photos.large}
             alt="asd"/>
      </div>
      <div>
        <div className={style.containerInfo}>
          <div className={style.descriptionInfo}>
            <div className={style.name}>
              {props.profile.fullName}
            </div>
            <div className={style.status}>online</div>
          </div>
          <ProfileStatus status={props.status} onUpdateUserStatus={props.onUpdateUserStatus}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
