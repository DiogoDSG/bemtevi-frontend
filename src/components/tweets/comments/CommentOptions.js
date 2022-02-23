import OptionsCard from '../../UI/OptionsCard';
import { IoFlagOutline } from 'react-icons/io5';
import classes from './CommentOptions.module.css';

const CommentOptions = function (props) {
  return (
    <OptionsCard onBlur={props.onBlur} translate={classes.container}>
      <div>
        <IoFlagOutline />
        <span>Report Comment</span>
      </div>
    </OptionsCard>
  );
};

export default CommentOptions;
