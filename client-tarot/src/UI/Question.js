import React from "react";
import styles from "./Question.module.css";
import pinkCloud from "../assets/pink_cloud_cut.png";

function Question(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={pinkCloud} alt="pink_cloud"></img>
        <h1 className={styles.h1}>
          <span>Your Question: </span>
          {props.question}
        </h1>
      </div>
    </div>
  );
}

export default Question;
