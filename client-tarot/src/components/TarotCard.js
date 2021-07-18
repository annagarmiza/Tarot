import { React, useState, forwardRef } from "react";
import styles from "./TarotCard.module.css";
import backCardImg from "../assets/AAYpDP42wxI.jpg";

const TarotCard = forwardRef((props, ref) => {
  const [IsFlipped, setFlipped] = useState(false);

  function flipCard(e) {
    // const rect = cardRef.current.getBoundingClientRect()
    // // console.log("this is the ref", props.testRef)
    // const leftX = rect.left + window.scrollX;
    // console.log(`leftX ${leftX}`);
    // console.log(`window.scrollX ${window.scrollX}`);
    // const topY = rect.top + window.scrollY;
    // console.log(`window.scrollY ${window.scrollY}`);
    // console.log(`topY ${topY}`);

    // const centerX = window.innerWidth / 2 + "px";
    // console.log(`centerX ${centerX}`);
    // const centerY = window.innerHeight / 2 + "px";
    // console.log(`centerY ${centerY}`);

    // if (centerX < leftX) {
    //   posMoveX = leftX - centerX;
    // } else {
    //   posMoveX = centerX - leftX;
    // }
    // console.log(posMoveX);
    // setPosX(posMoveX);

    // posMoveX = posMoveX + "px";

    // if (centerY < topY) {
    //   posMoveY = topY - centerY;
    // } else {
    //   posMoveY = centerY - topY;
    // }
    // console.log(posMoveY);

    // posMoveY = posMoveY + "px";
    // // cardRef.current.style.position = "absolute";
    // // cardRef.current.style.marginLeft = "100px";
    // // cardRef.current.style.marginTop = "15rem";

    // // setInterval(frame, 5);
    // // function frame() {
    // //   let pos = 0;
    // //   while (pos === 150) {
    // //     pos++;
    // //     cardRef.current.style.marginTop = pos + "px";
    // //   }
    // // }

    // console.log(posMoveX);
    // setPosY(posMoveY);

    // console.log(centerX);
    // console.log(centerY);
    // console.log("left", posMoveX);
    // console.log("top", centerY);

    // console.log("this is the E", e);
    // console.log("this is rect", rect); //739

    //screenX: 544
    // screenY: 671
    //     clientX: 435
    // clientY: 480
    //     pageX: 443
    // pageY: 530
    //     offsetX: 457
    // offsetY: 517

    if (IsFlipped === true) return;
    setFlipped(true);

    //Card Reveal Logic
    props.onClickCardReveal();
    console.log(props.img);
  }

  return (
    <li
      ref={ref}
      onClick={flipCard}
      className={`${styles.card} ${styles.grid}`}
    >
      {!IsFlipped && (
        <div className={`${styles.card__inner}`}>
          <div className={styles.card__back}>
            <img src={backCardImg} alt="img tarot"></img>
          </div>
        </div>
      )}
      {IsFlipped && (
        <div className={`${styles.card__inner} ${styles.card_flip}`}>
          <div className={styles.card__front}>
            <img src={props.img} alt="img tarot"></img>
          </div>
        </div>
      )}
    </li>
  );
});

export default TarotCard;
