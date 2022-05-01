import React from "react";
import Loading from "../UI/Loading";
import InterpetationCardAll from "./InterpetationCardAll";
import styles from "./Interpetation.module.css";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getInterpretationStatus,
  getQuestion,
  fetchInterpretation,
  getListOfCardIds,
  getError,
} from "../store/reading-slice";
import Question from "../UI/Question";
import Error from "../UI/Error";

export default function Interpetation(props) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const status = useSelector(getInterpretationStatus);
  const question = useSelector(getQuestion);
  const ids = useSelector(getListOfCardIds);
  const error = useSelector(getError);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchInterpretation(ids));
    }
  }, [dispatch, status, ids]);

  return (
    <Fragment>
      {isLoading && (
        <Loading
          onFinish={setTimeout(function () {
            setIsLoading(false);
          }, 6500)}
        />
      )}
      {!isLoading && status === "failed" ? (
        <Error error={error}></Error>
      ) : (
        !isLoading && (
          <div className={styles.container}>
            {question ? <Question question={question}></Question> : ""}

            <InterpetationCardAll />
          </div>
        )
      )}
    </Fragment>
  );
}
