import { IoEllipsisVertical } from 'react-icons/io5';
import classes from './MenuUserCard.module.css';

const UserCard = function (props) {
  return (
    <div className={classes.container}>
      <img
        className={classes['profile-pic']}
        src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
      ></img>
      <div className={classes['user-info']}>
        <p className={classes.username}>{props.fullName}</p>
        <p className={classes.hashtag}>@{props.username}</p>
      </div>
      <IoEllipsisVertical
        onClick={props.onOptionClick}
        className={classes.icon}
      />
    </div>
  );
};

export default UserCard;
