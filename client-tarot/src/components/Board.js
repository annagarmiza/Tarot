import styles from "./Board.module.css";
import { useState, useEffect } from "react";

import Deck from "./Deck";
import Interpetation from "./Interpetation";

function Board(props) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showInterpetation, setShowInterpetation] = useState(false);
  const [pickedCardsArr, setPickedCardsArr] = useState([]);

  //need to rewrite this useEffect to async and to catch errors
  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/api/v1/cards")
      .then((response) => response.json())
      .then((data) => setCards(data.data.cards))
      .catch((error) => {
        throw error;
      });
    setIsLoading(false);
  }, [props.selected]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function setInterpetation(results) {
    setPickedCardsArr(results);
    console.log("These are the results ", results);
    setShowInterpetation(true);
  }

  function handleShuffle() {
    let array = [...cards];
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setCards(array);
  }

  return (
    <div className={styles.board}>
      {showInterpetation ? (
        <Interpetation cardsResult={pickedCardsArr} question={props.question} />
      ) : (
        <Deck
          onShuffle={handleShuffle}
          cards={cards}
          selected={props.selected}
          onFinish={setInterpetation}
        />
      )}
    </div>
  );
}

export default Board;
