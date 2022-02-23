import React from 'react';

const UserContext = React.createContext({
  fullName: '',
  firstName: '',
  lastName: '',
  username: '',
  id: '',
  bio: '',
  email: '',
  posts: [],
  addPost: () => {},
  loginUser: () => {},
});

export default UserContext;
