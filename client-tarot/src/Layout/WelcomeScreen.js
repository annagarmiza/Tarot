import styles from "./WelcomeScreen.module.css";
import Button from "../UI/Button";
import { useState, Fragment } from "react";
import infoIcon from "../assets/info1.png";
import Modal from "../UI/Modal";
import tarotImg from "../assets/tarot.png";
import glitterImg from "../assets/giphy12.gif";
import divineImg from "../assets/giphy_4.gif";

const WelcomeScreen = (props) => {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openNextModal, setNextModal] = useState(false);

  function questionChangeHandler(event) {
    setEnteredQuestion(event.target.value);
    props.onEnteredQuestion(enteredQuestion);
  }
  //Modal Logic
  function onClickInformation() {
    setOpenModal(true);
  }

  function onCloseModal() {
    setOpenModal(false);
  }

  function onClickNextModal() {
    setOpenModal(false);
    setNextModal(true);
  }

  return (
    <Fragment>
      <div className={styles.welcome}>
        <div className={styles.center}>
          <div>
            <p className={styles.p}>
              Hello ✨ Discover what the stars have in store <br /> for you
              today. Connect to your inner wisdom 🧙‍♀️🌠:
            </p>
          </div>
          <div>
            <textarea
              className={styles.textarea}
              placeHolder=" 👼👉 ✴✴✴Enter Your Question (Optional)✴✴✴ 👈👼"
              rows="6"
              cols="54"
              onChange={questionChangeHandler}
              maxLength={150}
            ></textarea>
          </div>
          <div className={styles.buttons_container}>
            <Button onClick={props.onClick}>START A READING</Button>

            <img
              className={styles.icon}
              src={infoIcon}
              alt="information"
              onClick={onClickInformation}
            />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          in={openModal}
          title="HOW READING TAROT CAN BENEFIT YOU"
          btnText="Next"
          img1={tarotImg}
          img2={glitterImg}
          arrow={true}
          onExit={onCloseModal}
          onClick={onClickNextModal}
        >
          <p className={styles.p_text}>
            <span className={styles.p_text_capital}>T</span>arot is a system of
            archetypes, a picture-book of the human condition, reflecting our
            states of mind and stages of life.
            <br /> <span className={styles.p_text_capital}>O</span>ver the past
            six hundred years, people have consulted the cards for religious
            instruction , spiritual insighs, self knowledge, and divining the
            future. 📿🤲🔮🏺 <br />
            <span className={styles.p_text_capital}>T</span>he ancient symbols
            we see on the cards are designed to stimulate our intuition,
            connecting us with our higher selves or our divine or spiritual
            aspect.🌙🌞
          </p>
        </Modal>
      )}

      {openNextModal && (
        <Modal
          in={openNextModal}
          title="HOW READING TAROT CAN BENEFIT YOU"
          btnText="OK, That's AMAZING"
          img1={divineImg}
          // img2={glitterImg}
          arrow={false}
          onExit={() => {
            setNextModal(false);
          }}
          onClick={() => {
            setNextModal(false);
          }}
        >
          <p className={styles.p_text}>
            <span className={styles.p_text_capital}>R</span>egular tarot
            practice has many personal benefits, including the following: <br />
            <span className={styles.p_text_background}>
              Increased self-awareness🧘‍♀️:
            </span>{" "}
            Tarot gives you space to focus on yourself. <br />
            <span className={styles.p_text_background}>
              Enhanced creativity🎨:
            </span>{" "}
            A tarot reading can offer a different perspective on a problem and
            innovative ways forward. <br />
            <span className={styles.p_text_background}>
              Better-honed intuition and psychic ability🧙‍♀️:
            </span>{" "}
            Tarot helps you see probable future events and influences. The
            ability to empower others to find their spiritual path.
          </p>
        </Modal>
      )}
    </Fragment>
  );
};

export default WelcomeScreen;
