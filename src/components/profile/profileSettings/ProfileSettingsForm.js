import useInput from '../../../hooks/use-input';
import Input from '../../UI/Input';
import btnStyle from '../../login/btnForm.module.css';
import classes from './ProfileSettingsForm.module.css';

const validateEmail = function (email) {
  const validation = { valid: true, error: '' };

  // if (email.trim() === '') {
  //   validation.valid = false;
  //   validation.error = 'E-mail cannot be empty';
  // } else if (!email.includes('@')) {
  //   validation.valid = false;
  //   validation.error = 'Invalid e-mail.';
  // }

  return validation;
};

const validatePassword = function (password) {
  const validation = { valid: true, error: '' };

  // if (password.trim() === '') {
  //   validation.valid = false;
  //   validation.error = 'Password cannot be empty';
  // } else if (password.length < 6) {
  //   validation.valid = false;
  //   validation.error = 'Password must be at least 6 characters long';
  // }

  return validation;
};

const ProfileSettingsForm = function () {
  const emailState = useInput(validateEmail);
  const passwordState = useInput(validatePassword);

  const formIsValid = emailState.isValid && passwordState.isValid;

  const submitHandler = function (e) {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className={classes.title}>Edit Profile</h2>
      <Input
        label="Fullname"
        hasError={emailState.hasError}
        error={emailState.error}
        input={{
          type: 'text',
          value: emailState.value,
          onChange: emailState.changeHandler,
          onBlur: emailState.blurHandler,
        }}
      ></Input>
      <Input
        label="Bio"
        hasError={passwordState.hasError}
        error={passwordState.error}
        input={{
          type: 'text',
          value: passwordState.value,
          onChange: passwordState.changeHandler,
          onBlur: passwordState.blurHandler,
        }}
      ></Input>
      <button disabled={!formIsValid} className={btnStyle.submit}>
        Update
      </button>
    </form>
  );
};

export default ProfileSettingsForm;
