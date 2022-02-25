import { Fragment } from "react";
import classes from "./OptionsCard.module.css";

const CardOptions = function (props) {
  return (
    <Fragment>
      <aside
        className={`${classes.container} ${
          props.disableHover && classes["disable-hover"]
        } ${props.translate}`}
        onMouseLeave={props.onLoseFocus}
      >
        {props.children}
      </aside>
      <div onClick={props.onBlur} className={classes.backdrop} />
    </Fragment>
  );
};

export default CardOptions;
