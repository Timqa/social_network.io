import React from 'react';

import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => <DialogItem
    key={dialog.id}
    name={dialog.name}
    id={dialog.id}
    img={dialog.img}
  />);
  const messagesElements = state.messages.map((message) => <Messages key={message.id} className={style.message} id={message.id} message={message.message} />);
  const newMessageBody = state.newMessageBody;

  const SendMessageClick = () => {
    props.onSendMessage();
  }

  const NewMessageChange = (e) => {
    let body = e.target.value;
    props.onUpdateNewMessageBody(body);
  }

  if (!props.isAuth) {
    return <Redirect to={"/login"}/>
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messagesItems}>
        {messagesElements}
        {/*<textarea
          value={newMessageBody}
          className={style.dialogArea}
          onChange={NewMessageChange}
        />*/}
        <div className={style.windowMessage}>
          <div className={style.inputMessage}>
            <div contenteditable="true" aria-multiline="true" ></div>
          </div>
        </div>
        <button onClick={SendMessageClick} className={style.btnDialogSend}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;