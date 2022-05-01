import TarotCard from "./TarotCard";
import styles from "./TarotCardAll.module.css";
import FlipMove from "react-flip-move";
import { selectAllCards } from "../store/deck-slice";
import { useDispatch, useSelector } from "react-redux";
import { readingActions } from "../store/reading-slice";

function TarotCardsAll(props) {
  const dispatch = useDispatch();
  const imgPath = "/assets/tarot_deck/";
  const cards = useSelector(selectAllCards);
  function cardReveal() {
    dispatch(
      readingActions.addChosenCard({
        id: this.id,
        name: this.name,
        img: this.img,
      })
    );
    props.onClickCardReveal();
  }
  return (
    <ul
      style={{ listStyle: "none" }}
      className={`${styles.container} ${styles.grid}`}
    >
      <FlipMove enterAnimation={`fade`}>
        {cards.map((card) => (
          <TarotCard
            onClickCardReveal={cardReveal}
            key={card._id}
            id={card._id}
            name={card.name}
            img={imgPath + card.img + ".jpg"}
          />
        ))}
      </FlipMove>
    </ul>
  );
}

export default TarotCardsAll;
