import React from 'react';

import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import { Redirect } from 'react-router-dom';
import { DialogsMessageFormRedux } from '../FormMessages/FormMessages';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img} />
  ));
  const messagesElements = state.messages.map((message) => (
    <Messages
      key={message.id}
      className={style.message}
      id={message.id}
      message={message.message}
    />
  ));

  const addNewMessage = (values) => {
    props.onSendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Redirect to={'/login'} />;
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messagesItems}>
        {messagesElements}
        <DialogsMessageFormRedux
          onSubmit={addNewMessage}
        />
      </div>
    </div>
  );
};

export default Dialogs;
