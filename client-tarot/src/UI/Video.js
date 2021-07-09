import styles from "./Video.module.css";
import videoContent from "../assets/videoplayback.mp4";

function Video() {
  return (
    <video className={styles.video} autoPlay="autoplay" loop="loop" muted>
      <source src={videoContent} type="video/mp4" />
    </video>
  );
}

export default Video;
