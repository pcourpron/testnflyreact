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
          <div className={styles.subSection}>
            <div
              className={classNames(
                styles.integrationIcons,
                styles.showSteps,
                styles.trigger
              )}
            >
              <h2>Results in 20 minutes</h2>

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
          <img src="/images/peopleWalking.png" />
        </div>
      </div>
    </div>
  );
};
