import { useContext } from "react";
import classes from "./UserProfileInfo.module.css";
import UserContext from "../../../shared/context/user-context";

const UserProfileInfo = function () {
  const userCtx = useContext(UserContext);
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <img
          alt="user profile "
          className={classes["profile-pic"]}
          src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
        />
        <div className={classes.numbers}>
          <div className={classes["number-item"]}>
            <p>125</p>
            <p>Tweets</p>
          </div>
          <div className={classes["number-item"]}>
            <p>125</p>
            <p>followers</p>
          </div>
          <div className={classes["number-item"]}>
            <p>541</p>
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className={classes["user-idt"]}>
        <span className={classes["full-name"]}>{userCtx.fullName}</span>
        <span className={classes.hashtag}>@{userCtx.username}</span>
      </div>
      <div className={classes["user-description"]}>
        <p>{userCtx.bio}</p>
      </div>
      <button>Edit Profile</button>
    </section>
  );
};

export default UserProfileInfo;
