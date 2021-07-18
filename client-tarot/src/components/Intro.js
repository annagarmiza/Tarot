import React from "react";
import Modal from "../UI/Modal";
import breathGif from "../assets/breath2.gif";
import angelGif from "../assets/angel1.gif";
import crownGif from "../assets/giphy_crown1.gif";
import { useState } from "react";
import styles from "./Intro.module.css";

function Intro(props) {
  const [modal1, setModal1] = useState(true);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  function onInitial() {
    setModal1(true);
    setModal2(false);
    setModal3(false);
  }

  function onClickNextModal1() {
    setModal1(false);
    setModal2(true);
    setModal3(false);
  }

  function onClickNextModal2() {
    setModal2(false);
    setModal3(true);
  }

  return (
    <div>
      {modal1 && (
        <Modal
          title="Intro"
          btnText="Next"
          img1={breathGif}
          arrow={true}
          onExit={props.onExit}
          onClick={onClickNextModal1}
        >
          <p className={styles.p_text}>
            <span className={styles.p_text_capital}>T</span>ake a deep breath
          </p>
        </Modal>
      )}
      {modal2 && (
        <Modal
          title="Intro"
          btnText="Next"
          img1={crownGif}
          arrow={true}
          onExit={props.onExit}
          onClick={onClickNextModal2}
          back={true}
          btnTextBack="Back"
          onClickBack={onInitial}
        >
          {" "}
          <p className={styles.p_text}>
            <span className={styles.p_text_capital}>V</span>isualize light
            pouring down through the crown of your head <br />
            <span className={styles.p_text_capital}>I</span>magine your cards
            filling with this pure light
          </p>
        </Modal>
      )}
      {modal3 && (
        <Modal
          title="Intro"
          btnText="START"
          img1={angelGif}
          arrow={false}
          onExit={props.onExit}
          onClick={props.onExit}
          back={true}
          btnTextBack="Back"
          onClickBack={onClickNextModal1}
        >
          {" "}
          <p className={styles.p_text}>
            <span className={styles.p_text_capital}>I</span>f you work with
            spirit guides or angels, Kindly ask them to come close to help and
            protect you during the reading
            <br />
            <span className={styles.p_text_capital}>C</span>lick START when you
            are ready
          </p>
        </Modal>
      )}
    </div>
  );
}

export default Intro;
