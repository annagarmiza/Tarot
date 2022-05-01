import React from "react";
import InterpetationCard from "./InterpetationCard";
import styles from "./InterpetationCardAll.module.css";
import { useSelector } from "react-redux";
import { getChosenCardsArr } from "../store/reading-slice";

export default function InterpetationCardAll() {
  const cards = useSelector(getChosenCardsArr);
  console.log("cards11111111111111111111", cards);

  return (
    <div className={styles.container}>
      <ul style={{ listStyle: "none" }}>
        {cards.map((card) => (
          <InterpetationCard
            key={card.id}
            name={card.name}
            keys={card.keys}
            acrana={card.acrana}
            element={card.element}
            meaning={card.meaning}
            spreadMeaning={card.spread_meaning}
            img={card.img}
            questions={card.questions}
          />
        ))}
      </ul>
    </div>
  );
}
