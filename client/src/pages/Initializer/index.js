import React from "react";
import styles from "./initializer.module.scss";

export const Initializer = () => {
  return (
    <div className={styles.loader}>
      <img src="/images/tnf-logo.png" />
    </div>
  );
};
