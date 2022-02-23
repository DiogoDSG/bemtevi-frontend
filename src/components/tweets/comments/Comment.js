import { useState } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import MessageReactions from './CommentReactions';
import classes from './Comment.module.css';

import CommentOptions from './CommentOptions';

const Message = function (props) {
  const [openCommentOptions, setOpenCommentOptions] = useState(false);

  const handleOpenCommentOptions = function () {
    setOpenCommentOptions(prev => !prev);
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
          <MessageReactions likes={props.likes} />
        </div>
        <IoEllipsisVertical
          onClick={handleOpenCommentOptions}
          className={classes.icon}
        />
        {openCommentOptions && (
          <CommentOptions onBlur={handleOpenCommentOptions} />
        )}
      </div>
    </div>
  );
};

export default Message;
