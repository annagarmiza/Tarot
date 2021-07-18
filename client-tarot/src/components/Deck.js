import React from "react";
import styles from "./Board.module.css";
import { useState, useEffect } from "react";
import TarotCardsAll from "./TarotCardsAll";
import CardReveal from "./CardReveal";
import { Fragment } from "react";
import Freeze from "../UI/Freeze";
import useSound from "use-sound";
import Intro from "./Intro";
import angelicSound1 from "../assets/Angelic1.mp3";
import angelicSound2 from "../assets/Angelic2.mp3";
import angelicSound3 from "../assets/Angelic3.mp3";
import angelicSound4 from "../assets/Angelic4.mp3";
import angelicSound5 from "../assets/Angelic5.mp3";
import angelicSound6 from "../assets/Angelic6.mp3";
import Button from "../UI/Button";

export default function Deck(props) {
  const soundArray = [
    useSound(angelicSound1),
    useSound(angelicSound2),
    useSound(angelicSound3),
    useSound(angelicSound4),
    useSound(angelicSound5),
    useSound(angelicSound6),
  ];

  //rewrite to use reducer
  const [visibleCardReveal, setVisibleCardReveal] = useState(false);
  const [cardsCountPerSpread, setCardsCounterPerSpread] = useState(-1);
  const [spreadMeaningArr, setSpreadMeaningArr] = useState([]);
  const [cardsSpreadMax, setCardSpreadMax] = useState();
  const [pickedCard, setPickedCard] = useState([]);
  const [chosenCardsArr, setChosenCardsArr] = useState([]);

  const [soundIndex, setSoundIndex] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    const meaning = props.selected.layout.map((x) => x.meaning);
    setSpreadMeaningArr(meaning);
    setCardSpreadMax(props.selected.cardsQuantity);
  }, [props.selected]);

  useEffect(() => {
    if (soundIndex === soundArray.length) {
      setSoundIndex(0);
    }
  }, [soundIndex, soundArray.length]);

  function cardReveal(chosenCard) {
    //managing sound effects - START
    let [play] = soundArray[soundIndex];
    play();
    setSoundIndex((prevCount) => prevCount + 1);
    //managing sound effects - END

    setPickedCard(chosenCard);

    if (cardsCountPerSpread < cardsSpreadMax - 1) {
      chosenCardsArr.push({
        name: chosenCard[0],
        keys: chosenCard[1],
        acrana: chosenCard[2],
        element: chosenCard[3],
        meaning: chosenCard[4],
        img: chosenCard[5],
        questions: chosenCard[6],
        id: chosenCard[7],
        spread_meaning: spreadMeaningArr[cardsCountPerSpread + 1],
      });
      setChosenCardsArr(chosenCardsArr);
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

  function handleShuffle() {
    props.onShuffle();
  }
  function onExitModal() {
    setOpenModal(false);
  }

  return (
    <Fragment>
      {openModal && <Intro onShow={true} onExit={onExitModal}></Intro>}
      {!openModal && (
        <div className={styles.total}>
          <div className={styles.deck}>
            <h1 className={styles.h1}>
              {props.selected.layoutName}{" "}
              <span className={styles.span}>
                {cardsSpreadMax - cardsCountPerSpread - 1 === 0
                  ? `No More Cards To Choose`
                  : `${
                      cardsSpreadMax - cardsCountPerSpread - 1
                    } more cards to choose`}
              </span>
              <Button onClick={handleShuffle}>SHUFFLE</Button>
            </h1>
            <TarotCardsAll onClickCardReveal={cardReveal} cards={props.cards} />
          </div>
          {visibleCardReveal ? (
            <CardReveal
              cardTitle={pickedCard[0]}
              cardImg={pickedCard[5]}
              cardSpreadMeaning={spreadMeaningArr[cardsCountPerSpread]}
              removeComponent={setTimeout(function () {
                cardRevealStop();
              }, 5000)} //5500 before
            />
          ) : (
            ""
          )}
          {cardsSpreadMax - cardsCountPerSpread - 1 === 0 ? (
            <Freeze
              onFinish={setTimeout(function () {
                props.onFinish(chosenCardsArr);
              }, 6500)} //6500
            />
          ) : (
            ""
          )}
        </div>
      )}
    </Fragment>
  );
}
