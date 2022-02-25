import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Modal from "./shared/components/UI/Modal";
import AuthContext from "./shared/context/auth-context";

import HomePage from "./posts/pages/HomePage";
import LoginPage from "./user/pages/LoginPage";
import StartPage from "./shared/pages/StartPage";

import PostPage from "./posts/pages/PostPage";
import Profile from "./user/components/profile/UserProfile";
import ProfileSettings from "./user/components/profile/profileSettings/ProfileSettings";

const App = function () {
  const authCtx = useContext(AuthContext);
  const { isLogged } = authCtx;

  const loginModal = (
    <Modal>
      <LoginPage />
    </Modal>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={loginModal} />
        {isLogged && (
          <Route path="/home/" element={<HomePage logged={true} />}>
            <Route path="posts" element={<PostPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<ProfileSettings />} />
          </Route>
        )}

        <Route path="*" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
