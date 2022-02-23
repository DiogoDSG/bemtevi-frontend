import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import Modal from './components/UI/Modal';
import AuthContext from './store/auth-context';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';

import Tweets from './components/tweets/Tweets';
import Profile from './components/profile/UserProfile';
import ProfileSettings from './components/profile/profileSettings/ProfileSettings';

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
            <Route path="tweets" element={<Tweets />} />
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
