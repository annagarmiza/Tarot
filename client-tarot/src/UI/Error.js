import styles from "./Error.module.css";
import { Fragment } from "react";
const Error = (props) => {
  return (
    <Fragment>
      <div className={styles.error}>
        <div className={styles.center}>
          <p>
            Oops seems reading is off at the moment. An error occurred.
            <br /> Must be a sign.
            <br />
            🦋💖Try again later💖🦋
            <br />
            {props.error}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
