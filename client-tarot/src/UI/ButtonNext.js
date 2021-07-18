import React from "react";
import styles from "./ButtonNext.module.css";

function ButtonNext(props) {
  return (
    <button
      className={`${styles.button} ${styles.button1} ${styles.center}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ButtonNext;
