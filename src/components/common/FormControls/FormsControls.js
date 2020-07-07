import React from "react";
import style from './FormControls.module.css';

export const FormControl = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={ style.formControl + " " + (hasError ? style.error : "") }>
      <Element {...input} {...props} />
      { hasError && <span> { meta.error } </span> }
    </div>
  );
};

export const Textarea = ({input, meta, ...props}) => {
  return (
    <FormControl {...props} element={<textarea />} />
  )
}

export const Input = ({input, meta, ...props}) => {
  return (
    <FormControl {...props} element={<input />} />
  )
}