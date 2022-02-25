import { IoEllipsisVertical } from "react-icons/io5";
import { useState, useContext } from "react";
import { useHttp } from "../../../shared/hooks/use-http";
// import { getAllPostComments } from "../../../shared/util/api-comment";
import PostTemplate from "../PostTemplate";
import ReactionsNav from "./ReactionsNav";
import UserContext from "../../../shared/context/user-context";

import classes from "./PostItem.module.css";

const PostItem = function (props) {
  const [commentsOpen, setcommentsOpen] = useState(false);
  const userCtx = useContext(UserContext);
  // const { isLoading, sendRequest } = useHttp();

  const loadComments = async () => {
    // const comments = await sendRequest(getAllPostComments, props.id);
    // console.log(comments);
    setcommentsOpen((prevState) => !prevState);
  };

  const liked = props.likes.includes(userCtx.id);

  return (
    <PostTemplate
      styles={classes}
      owner={props.owner}
      commentsOpen={commentsOpen}
      reactions={
        <ReactionsNav
          icon={IoEllipsisVertical}
          likes={props.likes.length}
          messages={4}
          onChatClick={loadComments}
          liked={liked}
          id={props.id}
        />
      }
    />
  );
};

export default PostItem;
