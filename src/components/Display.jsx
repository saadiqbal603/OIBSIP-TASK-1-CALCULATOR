import React from "react";
import styles from "./Display.module.css";

function Display({ displayVal }) {
  return (
    <input
      placeholder="0"
      className={styles.display}
      type="text"
      value={displayVal}
      readOnly
    />
  );
}

export default Display;
