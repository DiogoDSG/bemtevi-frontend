import AuthContext from "./auth-context";
import { useState } from "react";

const AuthProvider = function (props) {
  const [token, setToken] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (token) => {
    setIsLogged(true);
    setToken(token);
  };

  const handleLogout = () => {
    setIsLogged(false);
    setToken(null);
  };

  const authContext = {
    isLogged,
    token,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
