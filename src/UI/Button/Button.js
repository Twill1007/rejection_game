import React from "react";
import classes from "../Button/button.module.css";

function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      Show Menu
    </button>
  );
}

export default Button;
