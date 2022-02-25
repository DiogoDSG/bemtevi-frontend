import React from "react";

const AuthContext = React.createContext({
  isLogged: false,
  token: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
