import classes from "./MenuItem.module.css";

const MenuItem = function (props) {
  const Icon = props.icon;
  return (
    <div className={classes.container} onClick={props.onClick}>
      <Icon className={classes.icon} />
      <p>{props.label}</p>
    </div>
  );
};

export default MenuItem;
