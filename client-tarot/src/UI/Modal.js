import React from "react";
import Button from "./Button";
import ButtonNext from "./ButtonNext";
import ButtonBack from "./ButtonBack";
import styles from "./Modal.module.css";
import closeIcon from "../assets/cancel1.png";

export default function Modal(props) {
  return (
    <div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
          <img src={closeIcon} alt="close" onClick={props.onExit}></img>
        </header>
        <div className={styles.content}>
          <img className={styles.mainImg} src={props.img1}></img>
          <img className={styles.glitter} src={props.img2}></img>

          <div>{props.children}</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.back}>
            {props.back && (
              <ButtonBack onClick={props.onClickBack}>
                {props.btnTextBack}
              </ButtonBack>
            )}
          </div>
          <div className={styles.next}>
            {props.arrow ? (
              <ButtonNext className={styles.next} onClick={props.onClick}>
                {props.btnText}
              </ButtonNext>
            ) : (
              <Button onClick={props.onClick}>{props.btnText}</Button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.backdrop} onClick={props.onExit}></div>
    </div>
  );
}
