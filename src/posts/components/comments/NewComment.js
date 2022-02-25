import classes from './NewComment.module.css';
import { IoSend } from 'react-icons/io5';

const NewComment = function () {
  return (
    <div className={classes.container}>
      <input placeholder="write a comment..." className={classes.input} />
      <button className={classes.btn}>
        <IoSend className={classes.icon} />
      </button>
    </div>
  );
};

export default NewComment;
