import {connect} from "react-redux";

import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateNewMessageBody: (body) => dispatch(updateNewMessageBodyAC(body)),
    onSendMessage: () => dispatch(sendMessageAC())
  }
}

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);