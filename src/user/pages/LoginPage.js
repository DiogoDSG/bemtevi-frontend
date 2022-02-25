import React, { useState, useContext } from "react";
import UserContext from "../../shared/context/user-context";
import AuthContext from "../../shared/context/auth-context";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";
import classes from "./LoginPage.module.css";
import { loginUser, signupUser } from "../../shared/util/api-user";
import { useNavigate } from "react-router-dom";

const Login = function (props) {
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const header = creatingUser ? "SIGN UP" : "LOGIN";
  const footer = creatingUser ? "Already has an account?" : "Need an account?";
  const linkText = creatingUser ? "LOGIN" : "SIGN UP";

  const handleLogin = async function (data) {
    const { user, token } = await loginUser(data);
    console.log(user, token);
    if (!user) return setError("Invalid account.");
    userCtx.loginUser(user);
    authCtx.login(token);
    navigate("/");
  };

  const handleSignUp = async function (data) {
    const { user, error } = await signupUser(data);

    if (!user) return setError(error);

    userCtx.loginUser(user);
    navigate("/");
  };

  const handleClick = function (e) {
    e.preventDefault();
    setError("");
    setCreatingUser((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <h2 className={classes.header}>{header}</h2>
      {creatingUser ? (
        <SignUpForm onSignUp={handleSignUp} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      {error && <p className={classes.error}>{error}</p>}
      <p className={classes.footer}>
        {footer}
        <a onClick={handleClick} href="">
          {linkText}
        </a>
      </p>
    </React.Fragment>
  );
};

export default Login;
