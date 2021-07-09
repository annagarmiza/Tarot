import React from "react";
import { Fragment } from "react";
import Button from "./Button";
import styles from "./Modal.module.css";
export default function Modal(props) {
  return (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.h2}>{props.title}</h2>
          <span className={styles.span} class="close">
            Skip
          </span>
        </header>
        <div className={styles.message}>
          <p className={styles.p}> {props.message}</p>
        </div>
        <footer className={styles.p}>
          <Button>{props.btnText}</Button>
        </footer>
      </div>
    </Fragment>
  );
}
