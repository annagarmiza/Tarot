import styles from "./WelcomeScreen.module.css";
import Button from "../UI/Button";
import { useState, Fragment, useEffect, useRef } from "react";

function WelcomeScreen(props) {
  //first element would be the current stored element , the second element is a function that allows you to change the value of the first element
  const [selectedValue, setValue] = useState({ value: "hide" });
  const [spread, setSpread] = useState("");

  const spreadForSelect = props.spreads.map((spread) => ({
    id: spread._id,
    label: spread.layoutName.toUpperCase(),
    value: spread.layoutName,
  }));

  console.log(spreadForSelect);

  function handleChange(event) {
    // setValue({ value: event.target.value });
    setSpread(event.target.value);
  }

  function hanldeClickButton() {
    // console.log(`I'm inside handleClickButton function ${selectedValue.value}`);
    console.log(spread);
    const selectedSpread = props.spreads.find((x) => x._id === spread);

    // const test = props.spreads.find(
    //   (selected) => selected._id === selectedSpread.id
    // );

    //console.log(...selectedSpread);
    props.onClick(selectedSpread);
    // );
  }
  return (
    <Fragment>
      <div className={styles.welcome}>
        <div className={styles.center}>
          <p className={styles.p}>
            Hello ✨ Discover what the stars have in store <br /> for you today.
            Connect to your inner wisdom 🧙‍♀️🌠:
          </p>
          <select
            className={styles.select}
            // value={selectedValue.value}
            onChange={handleChange}
          >
            <option value="Select a Spread" name="spreads">
              ✴✴ ⬇ Select a Spread ⬇ ✴✴
            </option>
            {spreadForSelect.map((spread) => (
              <option value={spread.id}>{spread.label}</option>
            ))}
          </select>
          <br />
          <Button onClick={hanldeClickButton}>START A READING</Button>
        </div>
      </div>
      {/* {showBoard && <Board selected={selectedValue.value} />} */}
    </Fragment>
  );
}

export default WelcomeScreen;
