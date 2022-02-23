import classes from "./ContactItem.module.css";

const ContactItem = function (props) {
  return (
    <div className={classes.container}>
      <img
        className={classes["profile-pic"]}
        src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
        alt="user from contact list"
      />
      <p>{props.name}</p>
    </div>
  );
};

export default ContactItem;
