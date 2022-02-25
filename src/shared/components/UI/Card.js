import React from "react";

import "./Card.css";

const Card = (props) => {
  const styles = `card ${props.start ? "start" : ""} ${
    props.center ? "center" : ""
  }`;
  return <div className={styles}>{props.children}</div>;
};

export default Card;
