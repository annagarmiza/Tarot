import React from "react";
import InterpetationCard from "./InterpetationCard";
import styles from "./InterpetationCardAll.module.css";

export default function InterpetationCardAll(props) {
  return (
    <div className={styles.container}>
      <ul style={{ listStyle: "none" }}>
        {props.cardsResult.map((card) => (
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
