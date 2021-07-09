import React, { Fragment } from "react";
import styles from "./CardReveal.module.css";

export default function CardReveal(props) {
  return (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={`${styles.card} ${styles.zoom}`}>
        <p className={styles.p}>
          {props.cardTitle}
          <br /> ❇<span className={styles.span}>
            {props.cardSpreadMeaning}
          </span>{" "}
          ❇
        </p>
        <img className={styles.img} src={props.cardImg} alt="img tarot"></img>
      </div>
    </Fragment>
  );
}
