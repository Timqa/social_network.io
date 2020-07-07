import React from 'react';
import {Field, reduxForm} from 'redux-form';

import style from './FormLogin.module.css';
import {FormControl} from "../common/FormControls/FormsControls";
import {requiredField} from "../utils/validators/validators";

const Input = FormControl("input");

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={style.inp}
          placeholder={'FormLogin'}
          validate={[requiredField]}
          name={'login'}
          component={Input}
        />
      </div>
      <div>
        <Field
          className={style.inp}
          validate={[requiredField]}
          placeholder={'Password'}
          name={'password'}
          component={Input}
        />
      </div>
      <div>
        <label>
          <Field
            type={'checkbox'}
            validate={[requiredField]}
            name={'rememberMe'}
            component={Input}
          /> remember me
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

export const FormLogin = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
};
