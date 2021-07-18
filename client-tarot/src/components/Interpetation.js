import React from "react";
import Loading from "../UI/Loading";
import InterpetationCardAll from "./InterpetationCardAll";
import styles from "./Interpetation.module.css";
import { Fragment, useEffect, useState } from "react";
import Question from "../UI/Question";

export default function Interpetation(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      {isLoading && (
        <Loading
          onFinish={setTimeout(function () {
            setIsLoading(false);
          }, 6500)}
        />
      )}
      {!isLoading && (
        <div className={styles.container}>
          {props.question ? (
            <Question question={props.question}></Question>
          ) : (
            ""
          )}

          <InterpetationCardAll
            cardsResult={props.cardsResult}
          ></InterpetationCardAll>
        </div>
      )}
    </Fragment>
  );
}
