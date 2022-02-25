import MessageReactions from "./CommentReactions";
import classes from "./CommentItem.module.css";
import PostTemplate from "../PostTemplate";

const CommentItem = function (props) {
  return (
    <PostTemplate
      styles={classes}
      owner={props.owner}
      reactions={<MessageReactions likes={props.likes} />}
    />
  );
};

export default CommentItem;
