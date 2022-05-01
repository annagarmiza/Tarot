import React, { Fragment } from "react";
import styles from "./CardReveal.module.css";
import { getChosenCard } from "../store/reading-slice";
import { useSelector } from "react-redux";

export default function CardReveal(props) {
  const card = useSelector(getChosenCard);
  return (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={` ${styles.card} ${styles.zoom}`}>
        <p className={styles.p}>
          {card.name}
          <br /> ❇<span className={styles.span}>{card.spread_meaning}</span>❇
        </p>

        <img className={styles.img} src={card.img} alt="img tarot"></img>
      </div>
    </Fragment>
  );
}
