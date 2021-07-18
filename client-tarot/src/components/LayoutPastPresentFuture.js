import React from "react";
import styles from "./LayoutPastPresentFuture.module.css";

export default function LayoutPastPresentFuture(props) {
  console.log(props);
  console.log(props.cardsResult[0].img);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${styles.box1}`}>
          <img
            className={styles.img}
            src={props.cardsResult[0].img}
            alt="card"
          ></img>
          <h2 className={styles.h2}>{props.cardsResult[0].spread_meaning}</h2>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <img
            className={styles.img}
            src={props.cardsResult[1].img}
            alt="card"
          ></img>
          <h2 className={styles.h2}>{props.cardsResult[1].spread_meaning}</h2>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <img
            className={styles.img}
            src={props.cardsResult[2].img}
            alt="card"
          ></img>
          <h2 className={styles.h2}>{props.cardsResult[2].spread_meaning}</h2>
        </div>
      </div>
    </div>
  );
}
