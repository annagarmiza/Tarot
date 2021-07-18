import React from "react";
import styles from "./InterpetationCard.module.css";

export default function Test(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${styles.box1}`}>
          <h2 className={styles.h2}>
            {props.spreadMeaning} :{" "}
            <span className={styles.span}>{props.name}</span>
          </h2>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <img src={props.img} alt="tarot_img" className={styles.img} />
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <ul style={{ listStyle: "none" }}>
            {props.keys.map((key) => (
              <li className={styles.li1}>{key}</li>
            ))}
          </ul>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          {" "}
          <p>{props.meaning}</p>
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
          <ul style={{ listStyle: "none" }}>
            {props.questions.map((question) => (
              <li className={styles.li2}>{question}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
