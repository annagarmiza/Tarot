import "./App.css";
import Video from "./UI/Video";
import Header from "./Layout/Header";
import WelcomeScreen from "./Layout/WelcomeScreen";
import Board from "./components/Board";
import styles from "./App.module.css";
import { useState, useEffect, useRef } from "react";
import Error from "./UI/Error";
import SpreadsSection from "./Layout/SpreadsSection";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readingActions } from "./store/reading-slice";
import {
  fetchSpreads,
  getError,
  getSpreadsStatus,
  selectAllSpreads,
} from "./store/spreads-slice";

function App() {
  const spreadSectionRef = useRef();
  const dispatch = useDispatch();
  //const spreads = useSelector(selectAllSpreads);
  // console.log("SPREADS", spreads);
  const status = useSelector(getSpreadsStatus);
  const error = useSelector(getError);
  const [showBoard, setShowBoard] = useState(false);
  //const [selectedSpread, setSelectedSpread] = useState("");
  //const [spread, setSpread] = useState();
  const [enteredQuestion, setEnteredQuestion] = useState("");

  useEffect(() => {
    // fetch("http://localhost:3000/api/v1/spreads")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSpread(data.data.card_spreads);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    if (status === "idle") {
      dispatch(fetchSpreads());
    }
  }, [dispatch, status]);

  function onEnteredQuestion(question) {
    setEnteredQuestion(question);
  }

  function spreadSectionScroll() {
    spreadSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function setBoard() {
    //const selectedValue = { ...selected };
    //console.log(`this is from parent`, { ...selected });
    //setSelectedSpread(selectedValue);
    //dispatch(readingActions.setSpread(selectedValue));
    if (enteredQuestion) {
      dispatch(readingActions.setQuestion(enteredQuestion));
    }
    setShowBoard(true);
    console.log("I'm HERE motherfucket");
  }

  return (
    <body className={styles.body}>
      <Header />
      <Video />

      {status === "failed" && <Error error={error}></Error>}

      {status !== "failed" && showBoard ? (
        // <Board selected={selectedSpread} question={enteredQuestion} />
        <Board />
      ) : (
        status !== "failed" && (
          <Fragment>
            <WelcomeScreen
              onClick={spreadSectionScroll}
              onEnteredQuestion={onEnteredQuestion}
            />
            <SpreadsSection
              ref={spreadSectionRef}
              //spreads={spreads}
              onClick={setBoard}
            ></SpreadsSection>
          </Fragment>
        )
      )}
    </body>
  );
}
export default App;
