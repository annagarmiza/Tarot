import "./App.css";
import Video from "./UI/Video";
import Header from "./Layout/Header";
import WelcomeScreen from "./Layout/WelcomeScreen";
import Board from "./components/Board";
import styles from "./App.module.css";
import { useState, useEffect, useRef } from "react";
import SpreadsSection from "./Layout/SpreadsSection";
import { Fragment } from "react";

function App() {
  const spreadSectionRef = useRef();
  const [showBoard, setShowBoard] = useState(false);
  const [selectedSpread, setSelectedSpread] = useState("");
  const [spread, setSpread] = useState();
  const [enteredQuestion, setEnteredQuestion] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/spreads")
      .then((response) => response.json())
      .then((data) => {
        setSpread(data.data.card_spreads);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  function onEnteredQuestion(question) {
    setEnteredQuestion(question);
  }

  function spreadSectionScroll() {
    spreadSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function setBoard(selected) {
    const selecteValue = { ...selected };
    console.log(`this is from parent`, { ...selected });
    setSelectedSpread(selecteValue);
    console.log(selecteValue.layoutName);
    setShowBoard(true);
  }

  return (
    <body className={styles.body}>
      <Header />
      <Video />
      {showBoard ? (
        <Board selected={selectedSpread} question={enteredQuestion} />
      ) : (
        <Fragment>
          <WelcomeScreen
            onClick={spreadSectionScroll}
            onEnteredQuestion={onEnteredQuestion}
          />
          <SpreadsSection
            ref={spreadSectionRef}
            spreads={spread}
            onClick={setBoard}
          ></SpreadsSection>
        </Fragment>
      )}
    </body>
  );
}
export default App;
