import useInput from "../../../shared/hooks/use-input";
import Input from "../../../shared/components/UI/Input";
import btnStyle from "./btnForm.module.css";

const validateUsername = function (password) {
  const validation = { valid: true, error: "" };

  if (password.trim() === "") {
    validation.valid = false;
    validation.error = "Username cannot be empty";
  } else if (password.length < 6) {
    validation.valid = false;
    validation.error = "Username must be at least 6 characters long";
  }

  return validation;
};

const validateEmail = function (email) {
  const validation = { valid: true, error: "" };

  if (email.trim() === "") {
    validation.valid = false;
    validation.error = "E-mail cannot be empty";
  } else if (!email.includes("@")) {
    validation.valid = false;
    validation.error = "Invalid e-mail.";
  }

  return validation;
};

const validatePassword = function (password) {
  const validation = { valid: true, error: "" };

  if (password.trim() === "") {
    validation.valid = false;
    validation.error = "Password cannot be empty";
  } else if (password.length < 6) {
    validation.valid = false;
    validation.error = "Password must be at least 6 characters long";
  }

  return validation;
};

const validateFullName = function (fullname) {
  const validation = { valid: true, error: "" };

  if (fullname.trim() === "") {
    validation.valid = false;
    validation.error = "Fullname cannot be empty";
  }
  return validation;
};

const SignUpForm = function (props) {
  const usernameState = useInput(validateUsername);
  const emailState = useInput(validateEmail);
  const passwordState = useInput(validatePassword);
  const fullNameState = useInput(validateFullName);

  const formIsValid =
    usernameState.isValid &&
    emailState.isValid &&
    passwordState.isValid &&
    fullNameState.isValid;

  const submitHandler = function (e) {
    e.preventDefault();

    const user = {
      username: usernameState.value,
      email: emailState.value,
      password: passwordState.value,
      fullName: fullNameState.value,
    };

    props.onSignUp(user);
    usernameState.reset();
    emailState.reset();
    passwordState.reset();
    fullNameState.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        label="Fullname"
        hasError={fullNameState.hasError}
        error={fullNameState.error}
        input={{
          type: "text",
          value: fullNameState.value,
          onChange: fullNameState.changeHandler,
          onBlur: fullNameState.blurHandler,
        }}
      ></Input>
      <Input
        label="Username"
        hasError={usernameState.hasError}
        error={usernameState.error}
        input={{
          type: "text",
          value: usernameState.value,
          onChange: usernameState.changeHandler,
          onBlur: usernameState.blurHandler,
        }}
      ></Input>
      <Input
        label="Email"
        hasError={emailState.hasError}
        error={emailState.error}
        input={{
          type: "email",
          value: emailState.value,
          onChange: emailState.changeHandler,
          onBlur: emailState.blurHandler,
        }}
      ></Input>
      <Input
        label="Password"
        hasError={passwordState.hasError}
        error={passwordState.error}
        input={{
          type: "password",
          value: passwordState.value,
          onChange: passwordState.changeHandler,
          onBlur: passwordState.blurHandler,
        }}
      ></Input>
      <button disabled={!formIsValid} className={btnStyle.submit}>
        SIGN UP
      </button>
    </form>
  );
};

export default SignUpForm;
