import React from 'react';
import UserProvider from './store/UserProvider';
import AuthContext from './store/AuthProvider';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
);
