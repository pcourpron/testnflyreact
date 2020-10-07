import React from "react";
import styles from "./icon.module.scss";

export default ({ img, text, delay }) => {
  return (
    <>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={img} />
      </div>
      {text}
    </>
  );
};
