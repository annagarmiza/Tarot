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
} from "./store/spreads-slice";

function App() {
  const spreadSectionRef = useRef();
  const dispatch = useDispatch();
  const status = useSelector(getSpreadsStatus);
  const error = useSelector(getError);
  const [showBoard, setShowBoard] = useState(false);

  const [enteredQuestion, setEnteredQuestion] = useState("");

  useEffect(() => {
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
    if (enteredQuestion) {
      dispatch(readingActions.setQuestion(enteredQuestion));
    }
    setShowBoard(true);
  }

  return (
    <body className={styles.body}>
      <Header />
      <Video />

      {status === "failed" && <Error error={error}></Error>}

      {status !== "failed" && showBoard ? (
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
              onClick={setBoard}
            ></SpreadsSection>
          </Fragment>
        )
      )}
    </body>
  );
}
export default App;
