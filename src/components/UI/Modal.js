import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalCard = function (props) {
  return (
    <div className={classes.backdrop}>
      <div className={classes["modal-card"]}>{props.children}</div>
    </div>
  );
};

const Modal = function (props) {
  const portalEl = document.querySelector(".overlays");
  return ReactDOM.createPortal(
    <ModalCard children={props.children} />,
    portalEl
  );
};

export default Modal;
