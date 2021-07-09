import TarotCard from "./TarotCard";
import styles from "./TarotCardAll.module.css";
import { useRef, useEffect } from "react";

function TarotCardsAll(props) {
  const imgPath = "/assets/tarot_deck/";
  function cardReveal() {
    const chosenCard = [this.name, this.acrana, this.img];
    props.onClickCardReveal(chosenCard);
  }
  return (
    <ul style={{ listStyle: "none" }} className={styles.container}>
      {props.cards.map((card) => (
        <TarotCard
          onClickCardReveal={cardReveal}
          key={card._id}
          name={card.name}
          acrana={card.acrana}
          img={imgPath + card.img + ".jpg"}
        />
      ))}
    </ul>
  );
}

export default TarotCardsAll;
