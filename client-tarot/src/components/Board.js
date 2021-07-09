import styles from "./Board.module.css";
import { useState, useEffect } from "react";
import TarotCardsAll from "./TarotCardsAll";
import CardReveal from "./CardReveal";
import { Fragment } from "react";
import Modal from "../UI/Modal";
// import axios from "axios";

const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;

function Board(props) {
  let results = [];
  //need to try to rewrite this part with useReducer...it's too much here
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCardReveal, setVisibleCardReveal] = useState(false);
  const [cardsCountPerSpread, setCardsCounterPerSpread] = useState(-1);
  const [meaningArr, setMeaningArr] = useState([]);
  const [cardsSpreadMax, setCardSpreadMax] = useState();
  const [pickedCard, setPickedCard] = useState([]);

  // const [error, setError] = useState(null);

  // axios.get("http://localhost:3000/api/v1/cards").then((res) => {
  //   const data = res.data;
  //   setCards(data.results);
  //   console.log(data.results);
  // });
  // const fetch = require("node-fetch");

  //need to rewrite this useEffect to async and to catch errors
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/api/v1/cards")
      .then((response) => response.json())
      .then((data) => setCards(data.data.cards));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const meaning = props.selected.layout.map((x) => x.meaning);
    setMeaningArr(meaning);
    setCardSpreadMax(props.selected.cardsQuantity);
  }, [props.selected]);

  // async function fetchCardsHandler() {
  // const response = await axios
  //   .get("http://localhost:3000/api/v1/cards")
  //   .then((res) => {
  //     const data = res.data;
  //     setCards(data.results);
  //   });

  // console.log(response);

  // setError(null);

  //   try {
  //     // setIsLoading(true);
  //     const response = await fetch("http://localhost:3000/api/v1/cards");
  //     console.log(response);
  //     const data = await response.json();
  //     console.log(data.data.cards);
  //     if (!response.ok) {
  //       throw new Error("");
  //     }

  //     console.log(data.cards);
  //     setCards(data.data.cards);
  //     // setIsLoading(false);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  function cardReveal(chosenCard) {
    console.log("I'm in board", chosenCard);
    setPickedCard(chosenCard);

    if (cardsCountPerSpread < cardsSpreadMax - 1) {
      results.push({
        cardName: chosenCard[0],
        cardMeaning: meaningArr[cardsCountPerSpread],
      });
      setCardsCounterPerSpread((prevCount) => prevCount + 1);
    } else {
      setVisibleCardReveal(false);
      return;
    }

    setVisibleCardReveal(true);
    //set state trigger the card to shown , and after a while hide
  }
  function cardRevealStop() {
    setVisibleCardReveal(false);
    // className = "styles.fade_out";
  }

  // fetchCardsHandler();
  return (
    <div>
      <div className={styles.board}>
        <h1 className={styles.h1}>
          {props.selected.layoutName}
          {"     "}
          <span className={styles.span}>
            {cardsSpreadMax - cardsCountPerSpread - 1} more cards to choose
          </span>
        </h1>
        {isLoading && <h1>Loading...</h1>}
        <TarotCardsAll onClickCardReveal={cardReveal} cards={cards} />
      </div>
      {visibleCardReveal ? (
        <CardReveal
          cardTitle={pickedCard[0]}
          cardImg={pickedCard[2]}
          cardSpreadMeaning={meaningArr[cardsCountPerSpread]}
          //try to add here onAnimationEnd - Animation Events

          removeComponent={setTimeout(function () {
            cardRevealStop();
          }, 5500)}
        />
      ) : (
        ""
      )}

      {cardsSpreadMax - cardsCountPerSpread - 1 === 0 ? <Modal></Modal> : ""}
    </div>
  );
}

export default Board;
