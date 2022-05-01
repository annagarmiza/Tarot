import { React, useState, forwardRef } from "react";
import styles from "./TarotCard.module.css";
import backCardImg from "../assets/AAYpDP42wxI.jpg";

const TarotCard = forwardRef((props, ref) => {
  const [IsFlipped, setFlipped] = useState(false);

  function flipCard(e) {
    if (IsFlipped === true) return;
    setFlipped(true);

    //Card Reveal Logic
    props.onClickCardReveal();
  }

  return (
    <li
      ref={ref}
      onClick={flipCard}
      className={`${styles.card} ${styles.grid}`}
    >
      {!IsFlipped && (
        <div className={`${styles.card__inner}`}>
          <div className={styles.card__back}>
            <img src={backCardImg} alt="img tarot"></img>
          </div>
        </div>
      )}
      {IsFlipped && (
        <div className={`${styles.card__inner} ${styles.card_flip}`}>
          <div className={styles.card__front}>
            <img src={props.img} alt="img tarot"></img>
          </div>
        </div>
      )}
    </li>
  );
});

export default TarotCard;
