import TarotCard from "./TarotCard";
import styles from "./TarotCardAll.module.css";
import FlipMove from "react-flip-move";

function TarotCardsAll(props) {
  const imgPath = "/assets/tarot_deck/";
  function cardReveal() {
    const chosenCard = [
      this.name,
      this.keys,
      this.acrana,
      this.element,
      this.meaning,
      this.img,
      this.questions,
      this.id,
    ];

    props.onClickCardReveal(chosenCard);
  }
  return (
    <ul
      style={{ listStyle: "none" }}
      className={`${styles.container} ${styles.grid}`}
    >
      <FlipMove enterAnimation={`fade`}>
        {props.cards.map((card) => (
          <TarotCard
            onClickCardReveal={cardReveal}
            key={card._id}
            id={card._id}
            name={card.name}
            keys={card.keys}
            acrana={card.acrana}
            element={card.element}
            meaning={card.meaning}
            questions={card.questions}
            img={imgPath + card.img + ".jpg"}
          />
        ))}
      </FlipMove>
    </ul>
  );
}

export default TarotCardsAll;
