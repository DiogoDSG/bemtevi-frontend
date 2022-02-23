import { useState, useContext } from "react";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { likePost, dislikePost } from "../../../utils/api";

import AuthContext from "../../../store/auth-context";
import classes from "./ReactionsNav.module.css";

const ReactionsNav = function (props) {
  const auth = useContext(AuthContext);
  const [chatPressed, setChatPressed] = useState(false);
  const [bookmarkPressed, setBookmarkPressed] = useState(false);

  const handleHearthClick = () => {
    props.liked
      ? dislikePost(props.id, auth.token)
      : likePost(props.id, auth.token);
  };

  const handleChatClick = () => {
    setChatPressed((prevState) => !prevState);
    props.onChatClick();
  };

  const handleBookmarkClick = () =>
    setBookmarkPressed((prevState) => !prevState);

  const hearth = (
    <div
      className={`${classes["reaction-container"]} ${classes.hearth}`}
      onClick={handleHearthClick}
    >
      {props.liked && (
        <IoHeart className={`${classes.icon}  ${classes["hearth-pressed"]}`} />
      )}
      {!props.liked && <IoHeartOutline className={classes.icon} />}
      <p className={props.liked ? classes["hearth-pressed"] : ""}>
        {props.likes} likes
      </p>
    </div>
  );

  const chat = (
    <div
      className={`${classes["reaction-container"]} ${classes.message}`}
      onClick={handleChatClick}
    >
      {chatPressed && (
        <IoChatbox className={`${classes.icon}  ${classes["chat-pressed"]}`} />
      )}
      {!chatPressed && <IoChatboxOutline className={classes.icon} />}
      <p className={chatPressed ? classes["chat-pressed"] : ""}>
        {props.messages} messages
      </p>
    </div>
  );

  const bookmark = (
    <div
      className={`${classes["reaction-container"]} ${classes.bookmark}`}
      onClick={handleBookmarkClick}
    >
      {bookmarkPressed && (
        <IoBookmark
          className={`${classes.icon}  ${classes["bookmark-pressed"]}`}
        />
      )}
      {!bookmarkPressed && <IoBookmarkOutline className={classes.icon} />}
      <p className={bookmarkPressed ? classes["bookmark-pressed"] : ""}>
        bookmark
      </p>
    </div>
  );

  return (
    <div className={classes.container}>
      {hearth}
      {chat}
      {bookmark}
    </div>
  );
};

export default ReactionsNav;
