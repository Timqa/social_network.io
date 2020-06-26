import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <label>
          <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
}