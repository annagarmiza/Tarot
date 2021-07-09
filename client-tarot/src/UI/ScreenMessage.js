import styles from "./ScreenMessage.module.css";
import Button from "../UI/Button";

function ScreenMessage(props) {
  return (
    <div className={styles.welcome}>
      <div className={styles.center}>
        <p className={styles.p}>
          Hello ✨ Discover what the stars has in store for you today. Connect
          to your inner wisdom 🌠🧙‍♀️:
        </p>

        <Button>START A READING</Button>
      </div>
    </div>
  );
}

export default ScreenMessage;
