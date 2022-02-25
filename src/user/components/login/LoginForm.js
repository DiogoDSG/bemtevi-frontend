import useInput from "../../../shared/hooks/use-input";
import Input from "../../../shared/components/UI/Input";
import btnStyle from "./btnForm.module.css";

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

const LoginForm = function (props) {
  const emailState = useInput(validateEmail);
  const passwordState = useInput(validatePassword);

  const formIsValid = emailState.isValid && passwordState.isValid;

  const submitHandler = function (e) {
    e.preventDefault();

    const user = {
      email: emailState.value,
      password: passwordState.value,
    };

    props.onLogin(user);
    emailState.reset();
    passwordState.reset();
  };

  return (
    <form onSubmit={submitHandler}>
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
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
