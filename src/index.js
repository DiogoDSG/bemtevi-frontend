import React from "react";
import UserProvider from "./shared/context/UserProvider";
import AuthContext from "./shared/context/AuthProvider";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById("root")
);
