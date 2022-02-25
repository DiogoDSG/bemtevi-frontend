import UserContext from './user-context';
import { useReducer } from 'react';

const defaultUserState = {
  fullName: '',
  firstName: '',
  lastName: '',
  username: '',
  id: '',
  email: '',
  posts: [],
};

const userReducer = function (state, action) {
  if (action.type === 'ADD_POST') {
    console.log('ADDED');
  }

  if (action.type === 'LOGIN_USER') {
    const { user } = action;
    const names = user.fullName.split(' ');
    return {
      fullName: user.fullName,
      firstName: names[0],
      lastName: names[names.length - 1],
      username: user.username,
      id: user._id,
      email: user.email,
    };
  }

  return defaultUserState;
};

const UserProvider = function (props) {
  const [userState, dispatchUserState] = useReducer(
    userReducer,
    defaultUserState
  );

  const addPostToUser = post => dispatchUserState({ type: 'ADD_POST', post });

  const handleLoginUser = function (user) {
    dispatchUserState({ type: 'LOGIN_USER', user });
  };

  const { fullName, username, posts, id, email, bio, firstName, lastName } =
    userState;
  const userContext = {
    fullName,
    firstName,
    lastName,
    username,
    id,
    email,
    posts,
    bio: bio || 'Nothing to see here :/',
    addPost: addPostToUser,
    loginUser: handleLoginUser,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
