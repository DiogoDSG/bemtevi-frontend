import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/user-context";
import AuthContext from "../store/auth-context";
import { getCurrentUser } from "../utils/api";

const StartPage = function () {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const storedToken = JSON.parse(localStorage.getItem("token"));

        if (!storedToken) throw new Error();

        const { user, token } = await getCurrentUser(storedToken);

        userCtx.loginUser(user);
        authCtx.login(token);

        navigate("/home/tweets");
      } catch (error) {
        navigate("/login");
      }
    })();
  }, []);

  return <div>loading...</div>;
};

export default StartPage;
