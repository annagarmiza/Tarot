import styles from "./Header.module.css";
import mainIcon from "./../assets/tarot3.png";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.img}
        src={mainIcon}
        alt="icon"
        onClick={() => {
          window.location.reload();
        }}
      ></img>
      <h1
        className={styles.h1}
        onClick={() => {
          window.location.reload();
        }}
      >
        TAROT
      </h1>
    </header>
  );
}

export default Header;
