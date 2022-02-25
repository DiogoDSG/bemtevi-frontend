import OptionsCard from "../../../shared/components/UI/OptionsCard";

import classes from "./UserModalCard.module.css";

const UserModalCard = function (props) {
  return (
    <OptionsCard
      onBlur={props.onBlur}
      translate={classes.container}
      disableHover
      onLoseFocus={props.onLoseFocus}
    >
      <div className={classes.content}>
        <div className={classes["user-info"]}>
          <img
            alt="user profile "
            className="profile-pic__medium"
            src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
          />
          <div>
            <p>{props.owner.fullName}</p>
            <p>@{props.owner.username}</p>
          </div>
        </div>
        <div className={classes["button-container"]}>
          <button>See profile</button>
          <button>Follow</button>
        </div>
      </div>
    </OptionsCard>
  );
};

export default UserModalCard;
