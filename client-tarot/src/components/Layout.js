import styles from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <div className={styles.firstPos}>
        <p className={styles.p}>Past</p>
      </div>
      <div className={styles.secondPos}>
        <p className={styles.p}>Present</p>
      </div>
      <div className={styles.thirdPos}>
        <p className={styles.p}>Future</p>
      </div>
    </div>
  );
}

export default Layout;
