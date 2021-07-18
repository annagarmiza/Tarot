import React from "react";
import styles from "./SpreadSection.module.css";
import classes from "./SpreadSectionCard.module.css";
import SpreadSectionCard from "./SpreadSectionCard";
import iconMagic from "../assets/magic.png";
import iconSmoke from "../assets/smoke.png";
import iconCrystalBall from "../assets/crystal-ball.png";
import { forwardRef } from "react";

const SpreadsSection = forwardRef((props, ref) => {
  function chosenSpread() {
    const selectedSpread = props.spreads.find((x) => x._id === this.spreadId);
    props.onClick(selectedSpread);
  }
  return (
    <div>
      <section className={styles.spreads_section}>
        <div ref={ref}>
          <h2 className={styles.h2}>PICK A SPREAD</h2>
        </div>
        <div className={classes.row}>
          <SpreadSectionCard
            onClick={chosenSpread}
            cardStyle={`classes.card1`}
            spreadId={"60b6830a9f964e2a84c2e4dc"}
            iconImg={iconSmoke}
            alt={"smoke"}
            imgStyle={classes.img1}
            headingStyle={classes.heading1}
            title={"PAST PRESENT FUTURE"}
            text={`Perfect for mini-readings when simplicity is best. Sometimes, we
          just need a status check, or a little hint or suggestion for things
          to become clear.`}
          ></SpreadSectionCard>
          <SpreadSectionCard
            onClick={chosenSpread}
            cardStyle={classes.card2}
            spreadId={"60e46c07e572f58437077468"}
            iconImg={iconMagic}
            alt={"magic"}
            imgStyle={classes.img2}
            headingStyle={classes.heading2}
            title={"THE CELTIC CROSS"}
            text={`Our MOST POPULAR READING! It has versatile ability to cover several
            aspects of a situation in depth. Getting a piece by piece breakdown
            of any event that has crossed your path..`}
          ></SpreadSectionCard>
          <SpreadSectionCard
            onClick={chosenSpread}
            cardStyle={classes.card4}
            spreadId={"60e46f0ce572f58437077469"}
            iconImg={iconCrystalBall}
            alt={"crystalball"}
            imgStyle={classes.img3}
            headingStyle={classes.heading3}
            title={"THE TREE OF LIFE"}
            text={`One of the most deeply mystical and revered symbols of occultism and
            mysticism is the "Tree of Life". The centuries-old pattern,
            represents both the impenetrable mysteries of Universe, and the
            human psyche itself.`}
          ></SpreadSectionCard>
        </div>
      </section>
    </div>
  );
});
export default SpreadsSection;
