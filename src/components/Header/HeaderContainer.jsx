import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.onSetAuthUserData()
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

const mapDispatchToProps = {
  onSetAuthUserData: getAuthUserDataThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);