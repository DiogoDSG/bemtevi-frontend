import React from 'react';
import classes from './Input.module.css';

const Input = function (props) {
  const inputClasses = `${classes.input} ${
    !props.hasError ? '' : classes.invalid
  }`;
  const labelClasses = `${classes.label} ${
    !props.hasError ? '' : classes['invalid-label']
  }`;
  return (
    <div className={classes.container}>
      <label className={labelClasses}>{props.label}</label>
      <input className={inputClasses} {...props.input}></input>
      {props.hasError && <p className={classes.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
