import React, { useState } from "react";
import styles from "./passengersback.module.scss";
import ClockRing from "../../components/ClockRing";
import Icon from "../../components/Icon";
import classNames from "classnames";

export const PassangersBack = () => {
  const [triggerClocks, setTriggerClocks] = useState(true);
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div className={styles.main}>
      <h1>Bring your passengers back!</h1>
      <div>
        <div className={styles.infoContainer}>
          <div className={classNames(styles.subSection, styles.headerInfo)}>
            <div className={styles.paragraphs}>
              <p>
                The Covid-19 pandemic has resulted in a dramatic reduction in
                air traffic, with IATA forecasting over 50% reduction in 2020
                RPKs versus 2019 <sup>(1)</sup>. In many parts of the world the
                early signs of a traffic recovery have stalled due to the
                continued growth in Covid-19 cases and resulting government
                action.
              </p>
              <p>
                Even with much reduced seat capacity, load factors remain
                stubbornly below break-even levels, with typical summer 2020
                load factors of 40-50% for international flights and 60-70% for
                domestic flight<sup>(1)</sup>. A key enabler to resuming
                profitable flying will be the ability to bring passengers back,
                who for the moment choose not to travel.
              </p>
              <p>
                TEST-N-FLY is an integrated, portable and inexpensive Covid-19
                testing solution, that provides rapid point-of-departure
                testing, result analysis and then immediate communication of the
                result to the passenger and to the airline.
              </p>
              <p>
                TEST-N-FLY adds less than 10 minutes to a traditional airline
                check-in, gives the airline ample time to deny boarding to the
                minority of passengers who test “positive”, and provides
                confidence to the passengers and crew that all on-board have
                tested negaitve for Covid-19 immediately before departure.
              </p>
            </div>

            <img src="/images/peopleWalking.png" />
          </div>
          <div className={styles.subSection}>
            <h2>Results in 20 minutes</h2>

            <div
              className={classNames(
                styles.integrationIcons,
                styles.showSteps,
                styles.trigger
              )}
            >
              <div className={styles.icon}>
                <ClockRing
                  radius={40}
                  stroke={6}
                  progress={10}
                  text={"5 min"}
                  trigger={triggerClocks}
                />
                <Icon
                  icon
                  delay={0}
                  img="/images/humanSwabIcon.png"
                  text="Passenger nose or throat swabbed using Antigen Rapid Test kit at Point-of-Care by technician"
                />
              </div>

              <div className={styles.icon}>
                <ClockRing
                  radius={40}
                  stroke={6}
                  progress={(10 / 60) * 100}
                  text={"10 min"}
                  delay="0.5s"
                  trigger={triggerClocks}
                />
                <Icon
                  icon
                  delay={1}
                  img="/images/swabIcon.png"
                  text="Swab dipped in reagent solution; solution applied to test strip coated with antibodies that react to antigen presence"
                />
              </div>
              <div className={styles.icon}>
                <div style={{ height: "80px", minWidth: "110px" }}></div>
                <Icon
                  icon
                  delay={2}
                  img="/images/miniTester.png"
                  text="Slide inserted into Fio Rapid Diagnostic Test (RDT) reader providing a controlled environment for safe and reliable reading"
                />
              </div>
              <div className={styles.icon}>
                <div style={{ height: "80px", minWidth: "110px" }}></div>

                <Icon
                  icon
                  delay={3}
                  img="/images/labtech.png"
                  text="Qualified laboratory technician evaluates slide image and determines test result"
                />
              </div>

              <div className={styles.icon}>
                <ClockRing
                  radius={40}
                  stroke={6}
                  progress={(20 / 60) * 100}
                  text={"20 min"}
                  delay="1.75s"
                  trigger={triggerClocks}
                />
                <Icon
                  delay={4}
                  icon
                  img="/images/phoneReceive.png"
                  text="Test result delivered to passenger mobile device and airline IT system"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
