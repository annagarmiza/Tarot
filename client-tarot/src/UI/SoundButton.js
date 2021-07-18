import React from "react";
import { useState } from "react";
import soundIcon from "../assets/sound.png";
import noSoundIcon from "../assets/no-sound.png";
import styles from "./SoundButton.module.css";
import Sound from "react-sound";
import oriSong from "../assets/ORI.mp3";

export default function SoundButton() {
  const [playMusic, setPlayMusic] = useState(true);

  function handleClick() {
    setPlayMusic(!playMusic);
  }

  return (
    <div>
      {playMusic ? (
        <icon className={styles.icon} onClick={handleClick}>
          <img className={styles.img} src={soundIcon} alt="sound"></img>
        </icon>
      ) : (
        <icon className={styles.icon} onClick={handleClick}>
          <img className={styles.img} src={noSoundIcon} alt="no-sound"></img>
        </icon>
      )}
      <Sound
        url={oriSong}
        loop={true}
        volume={30}
        playStatus={playMusic ? Sound.status.PLAYING : Sound.status.PAUSED}
      ></Sound>
    </div>
  );
}
