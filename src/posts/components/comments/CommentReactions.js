import { useState } from "react";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

import classes from "../posts/ReactionsNav.module.css";

const ReactionsNav = function (props) {
  const [hearthPressed, setHearthPressed] = useState(false);
  const [bookmarkPressed, setBookmarkPressed] = useState(false);

  const handleHearthClick = () => setHearthPressed((prevState) => !prevState);

  const handleBookmarkClick = () =>
    setBookmarkPressed((prevState) => !prevState);

  const hearth = (
    <div
      className={`${classes["reaction-container"]} ${classes.hearth}`}
      onClick={handleHearthClick}
    >
      {hearthPressed && (
        <IoHeart className={`${classes.icon}  ${classes["hearth-pressed"]}`} />
      )}
      {!hearthPressed && <IoHeartOutline className={classes.icon} />}
      <p className={hearthPressed ? classes["hearth-pressed"] : ""}>
        {props.likes} likes
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
    </div>
  );

  return (
    <div className={classes.container}>
      {hearth}
      {bookmark}
    </div>
  );
};

export default ReactionsNav;
