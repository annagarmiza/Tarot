import React from "react";
import styles from "./ButtonBack.module.css";

function ButtonBack(props) {
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

export default ButtonBack;
