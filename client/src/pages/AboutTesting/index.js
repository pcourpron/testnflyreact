import React from "react";
import styles from "./abouttesting.module.scss";

export const AboutTesting = () => {
  return (
    <div className={styles.main}>
      <h1>Quick and Accurate Testing</h1>

      <div className={styles.sectionContainer}>
        <img className={styles.accuracyImage} src="/images/accuracy.png" />
        <p>
          Magna exercitation dolore aute officia aliquip.Culpa velit nulla id
          Lorem id veniam ea incididunt laborum velit voluptate incididunt non
          laboris.Mollit elit eu cupidatat aute exercitation enim nulla esse
          irure.Dolor minim ipsum occaecat adipisicing magna ullamco Lorem
          occaecat.
        </p>
      </div>
      <div className={styles.sectionContainer}>
        <img className={styles.accuracyImage} src="/images/timer.jpg" />
        <p>
          Magna exercitation dolore aute officia aliquip.Culpa velit nulla id
          Lorem id veniam ea incididunt laborum velit voluptate incididunt non
          laboris.Mollit elit eu cupidatat aute exercitation enim nulla esse
          irure.Dolor minim ipsum occaecat adipisicing magna ullamco Lorem
          occaecat.
        </p>
      </div>
    </div>
  );
};
