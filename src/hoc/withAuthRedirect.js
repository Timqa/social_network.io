import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login"/>

      return <Component {...this.props} />
    }
  }

  const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  });

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent;
}