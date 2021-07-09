import "./App.css";
import Video from "./UI/Video";
import Header from "./Layout/Header";
import WelcomeScreen from "./Layout/WelcomeScreen";
import Board from "./components/Board";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");
  const [spreads, setSpread] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/spreads")
      .then((response) => response.json())
      .then((data) => {
        setSpread(data.data.card_spreads);
        console.log(data.data.card_spreads);
      });
  }, []);

  // if (window.performance) {
  //   if (performance.navigation.type === 1) {
  //     setShowBoard(false);
  //   }
  // }
  function setBoard(selected) {
    console.log(`this is from parent ${selected}`);
    setDropDownValue(selected);
    setShowBoard(true);
  }

  return (
    <body className={styles.body}>
      <Header />
      <Video />
      {showBoard ? (
        <Board selected={dropDownValue} />
      ) : (
        <WelcomeScreen spreads={spreads} onClick={setBoard} />
      )}
    </body>
  );
}
export default App;
