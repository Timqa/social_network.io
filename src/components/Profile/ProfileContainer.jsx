import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator
} from "../../redux/reducers/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (userId === undefined || userId === null) {
      userId = 8610;
    }
    this.props.onGetProfile(userId);
    this.props.onGetUserStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 onUpdateUserStatus={this.props.onUpdateUserStatus}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

const mapDispatchToProps = {
  onGetProfile: getProfileThunkCreator,
  onGetUserStatus: getUserStatusThunkCreator,
  onUpdateUserStatus: updateUserStatusThunkCreator
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
)(ProfileContainer);
