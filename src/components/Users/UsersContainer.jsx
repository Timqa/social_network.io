import React from 'react';
import {connect} from "react-redux";
import {
  followThunkCreator, getUsersThunkCreator,
  setCurrentPageAC, unFollowThunkCreator
} from "../../redux/reducers/users-reducer";
import {Users} from "./Users";
import {Loader} from "../common/Loader/Loader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class UserAPIComponent extends React.Component {

  componentDidMount() {
    this.props.onGetUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (page) => {
    this.props.onGetUsers(page, this.props.pageSize);
    this.props.onSetCurrentPage(page);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               users={this.props.users}
               currentPage={this.props.currentPage}
               onFollow={this.props.onFollow}
               onUnFollow={this.props.onUnFollow}
               onPageChanged={this.onPageChanged}
               isProgressFollow={this.props.isProgressFollow}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isProgressFollow: state.usersPage.isProgressFollow
  }
}

const mapDispatchToProps = {
  onSetCurrentPage: setCurrentPageAC,
  onGetUsers: getUsersThunkCreator,
  onFollow: followThunkCreator,
  onUnFollow: unFollowThunkCreator
}

export const UsersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UserAPIComponent);