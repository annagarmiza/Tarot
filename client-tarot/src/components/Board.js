import styles from "./Board.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  getCardsStatus,
  selectAllCards,
} from "../store/deck-slice";
import { deckActions, getError } from "../store/deck-slice";
import Deck from "./Deck";
import Interpetation from "./Interpetation";
import Error from "../UI/Error";

function Board(props) {
  const dispatch = useDispatch();
  const status = useSelector(getCardsStatus);
  const error = useSelector(getError);
  const cards = useSelector(selectAllCards);
  // const [cards, setCards] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [showInterpetation, setShowInterpetation] = useState(false);
  //const [pickedCardsArr, setPickedCardsArr] = useState([]);

  //need to rewrite this useEffect to async and to catch errors
  // in case it's loading we need to show some loading when it's pending
  useEffect(() => {
    //setIsLoading(true);
    //add this to a slice to manage
    // fetch("http://localhost:3000/api/v1/cards")
    //   .then((response) => response.json())
    //   .then((data) => setCards(data.data.cards))
    //   .catch((error) => {
    //     throw error;
    //   });
    if (status === "idle") {
      dispatch(fetchCards());
    }

    //setIsLoading(false);
  }, [dispatch, status]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function setInterpetation() {
    //remove the picked cards management to slice
    //setPickedCardsArr(results);
    //console.log("These are the results ", results);

    setShowInterpetation(true);
  }
  //move this logic into the slice
  // function handleShuffle() {
  //   let array = [...cards];
  //   let currentIndex = array.length,
  //     temporaryValue,
  //     randomIndex;
  //   while (0 !== currentIndex) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   setCards(array);
  // }

  return (
    <div className={styles.board}>
      {status === "failed" && <Error error={error}></Error>}

      {status !== "failed" && showInterpetation ? (
        //remove the picekdCardsArr and question from here , should be managed through slice
        //<Interpetation cardsResult={pickedCardsArr} question={props.question} />
        <Interpetation />
      ) : (
        status !== "failed" && (
          <Deck
            // onShuffle={()=>dispatch(deckActions.handleShuffle())}
            // cards={cards} // this is all the cards
            // selected={props.selected} //this is the selected spread
            onFinish={setInterpetation}
          />
        )
      )}
    </div>
  );
}

export default Board;
