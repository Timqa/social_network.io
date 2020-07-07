import React from 'react';
import style from '../FormMessages/FormMessages.module.css';
import { Field, reduxForm } from 'redux-form';
import {maxLengthCreator, requiredField} from "../utils/validators/validators";
import {FormControl} from "../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const Textarea = FormControl("textarea");

export const FormMessages = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[requiredField, maxLength10]}
        component={Textarea}
        name="newMessageBody"
        className={style.dialogArea}
        placeholder="Enter your message"
      />
      <button className={style.btnDialogSend}>
        Send
      </button>
    </form>
  );
};

export const DialogsMessageFormRedux = reduxForm({ form: 'dialogsMessageForm' })(FormMessages);
