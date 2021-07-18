import React from "react";
import styles from "./SpreadSectionCard.module.css";

export default function SpreadSectionCard(props) {
  function chooseCardId() {
    console.log(props.spreadId);
    props.onClick(props.spreadId);
  }
  return (
    <div onClick={chooseCardId} className={`${styles.card} ${props.cardStyle}`}>
      <img className={styles.icon} src={props.iconImg} alt={props.alt}></img>
      <div className={`${styles.picture} ${props.imgStyle}`}></div>
      <div className={`${styles.heading} ${props.headingStyle}`}>
        <h2>{props.title}</h2>
      </div>
      <p className={styles.p}>{props.text}</p>
    </div>
  );
}
