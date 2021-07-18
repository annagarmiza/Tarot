import React from "react";
import styles from "./Loading.module.css";
import imgGirl from "../assets/giphy.gif";
import cloud from "../assets/cloud.png";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <div className={styles.loader}></div>

        <img className={styles.img} src={imgGirl} alt="img_girl"></img>
      </div>
      <img className={styles.cloud_1} src={cloud} alt="cloud"></img>
      <img className={styles.cloud_2} src={cloud} alt="cloud"></img>
      <img className={styles.cloud_3} src={cloud} alt="cloud"></img>
    </div>
  );
}
