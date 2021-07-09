import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${styles.button} ${styles.button1} ${styles.center}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
