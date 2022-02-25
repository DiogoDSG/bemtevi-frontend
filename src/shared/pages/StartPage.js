import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/user-context";
import AuthContext from "../context/auth-context";
import { getCurrentUser } from "../util/api-user";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useHttp } from "../hooks/use-http";

const StartPage = function () {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const { sendRequest } = useHttp();

  useEffect(() => {
    (async () => {
      try {
        const storedToken = JSON.parse(localStorage.getItem("token"));

        if (!storedToken) throw new Error();

        const { user, token } = await sendRequest(getCurrentUser, storedToken);

        userCtx.loginUser(user);
        authCtx.login(token);

        navigate("/home/posts");
      } catch (error) {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <div className="center fullscreen">
      <LoadingSpinner />
    </div>
  );
};

export default StartPage;
