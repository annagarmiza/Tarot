import React from "react";
import styles from "./CardUI.module.css";

function CardUi(props) {
  return (
    <div className={`${styles.card} ${styles.className}`}>{props.children}</div>
  );
}

export default CardUi;
