import React from "react";
import styles from "./Board.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deckActions } from "../store/deck-slice";
import {
  getCardSpreadMax,
  getChosenSpreadLayoutName,
  getCurrentCardCount,
} from "../store/reading-slice";
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
  const dispatch = useDispatch();
  const cardsSpreadMax = useSelector(getCardSpreadMax);
  const cardsCountPerSpread = useSelector(getCurrentCardCount);
  const spreadName = useSelector(getChosenSpreadLayoutName);
  console.log(cardsSpreadMax, cardsCountPerSpread);
  const [visibleCardReveal, setVisibleCardReveal] = useState(false);

  const [soundIndex, setSoundIndex] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (soundIndex === soundArray.length) {
      setSoundIndex(0);
    }
  }, [soundIndex, soundArray.length]);

  function cardReveal() {
    //managing sound effects - START
    let [play] = soundArray[soundIndex];
    play();
    setSoundIndex((prevCount) => prevCount + 1);
    //managing sound effects - END

    if (!(cardsCountPerSpread <= cardsSpreadMax - 1)) {
      setVisibleCardReveal(false);
      return;
    }

    setVisibleCardReveal(true);
  }
  function cardRevealStop() {
    setVisibleCardReveal(false);
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
              {spreadName}{" "}
              <span className={styles.span}>
                {cardsSpreadMax - cardsCountPerSpread === 0
                  ? `No More Cards To Choose`
                  : `${
                      cardsSpreadMax - cardsCountPerSpread
                    } more cards to choose`}
              </span>
              <Button onClick={() => dispatch(deckActions.handleShuffle())}>
                SHUFFLE
              </Button>
            </h1>

            <TarotCardsAll onClickCardReveal={cardReveal} />
          </div>
          {visibleCardReveal ? (
            <CardReveal
              removeComponent={setTimeout(function () {
                cardRevealStop();
              }, 5000)} //5500 before
            />
          ) : (
            ""
          )}
          {cardsSpreadMax - cardsCountPerSpread === 0 ? (
            <Freeze
              onFinish={setTimeout(function () {
                props.onFinish();
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
