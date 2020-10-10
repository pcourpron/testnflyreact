import React, { useState } from "react";
import styles from "./passengersback.module.scss";
import ClockRing from "../../components/ClockRing";
import Icon from "../../components/Icon";
import classNames from "classnames";

export const Confidence = () => {
  const [triggerClocks, setTriggerClocks] = useState(true);
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div className={styles.main}>
      <h1>Fly with confidence</h1>
      <div>
        <div className={styles.infoContainer}>
          <div className={classNames(styles.subSection, styles.headerInfo)}>
            <div className={styles.paragraphs}>
              <p>
                The passenger travel experience in the current Covid-19
                environment is fraught with uncertainty and stress, as
                passengers struggle with the variety of government mandated
                regulations and a variety of individual airline regulations that
                can be confusing to understand and do not instill confidence.
              </p>
              <p>
                Most Covid-19 tests currently in use for air travel are of the
                RT-PCR type, that typically require 24 to 48 hours for the
                results to be obtained. This negates the opportunity for the
                test to be on the day of departure and means that the test
                result is out-of-date come the day of travel. The RT-PCR tests
                are also expensive to administer, and in many parts of the world
                are not readily available.
              </p>
              <p>
                The TEST-N-FLY Antigen test eliminates this delay as the test is
                performed during check-in, and with real-time results provides
                both the passenger and the airline the confidence that all
                passengers and crew on-board are Covid-19 free<sup>(1)</sup>.
              </p>
              <p>
                The passenger also does not need to worry about obtaining a test
                result before travel, and the airline maintains control of the
                entire process by virtue of the integrated TEST-N-FLY solution.
              </p>
            </div>

            <img src="/images/confidence.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
