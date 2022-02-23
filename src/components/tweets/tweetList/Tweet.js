import { IoEllipsisVertical } from 'react-icons/io5';
import { useState, useContext } from 'react';
import ReactionsNav from './ReactionsNav';
import MessageList from '../comments/CommentList';
import UserContext from '../../../store/user-context';

import classes from './Tweet.module.css';

const Tweet = function (props) {
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);
  const userCtx = useContext(UserContext);

  const liked = props.likes.includes(userCtx.id);

  const toggleMessageBox = function () {
    setMessageBoxOpen(prevState => !prevState);
  };

  return (
    <div className={classes.container}>
      <div className={classes['post-container']}>
        <img
          alt="user profile "
          className={classes['profile-pic']}
          src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
        />
        <div className={classes.main}>
          <div className={classes['user-info']}>
            <span className={classes.username}>{props.author}</span>
            <span className={classes.hashtag}>@{props.username}</span>
          </div>
          <p className={classes.content}>{props.content}</p>
          <ReactionsNav
            icon={IoEllipsisVertical}
            likes={props.likes.length}
            messages={4}
            onChatClick={toggleMessageBox}
            liked={liked}
            id={props.id}
          />
        </div>
        <IoEllipsisVertical className={classes.icon} />
      </div>
      {messageBoxOpen && <MessageList />}
    </div>
  );
};

export default Tweet;
