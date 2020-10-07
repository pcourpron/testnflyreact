import styles from "./about.module.scss";
import React, { createRef, useState, useEffect } from "react";
import VizSensor from "react-visibility-sensor";

import ClockRing from "../../components/ClockRing";
import LazyImage from "../../components/LazyImage";
import Icon from "../../components/Icon";
import classNames from "classnames";
export const AboutTest = () => {
  const [showSteps, setShowSteps] = useState(false);
  const [triggerClocks, setTriggerClocks] = useState(false);
  const hardware = createRef();
  const results = createRef();
  const timeline = createRef();
  const scrollTo = (name) => {
    let top;
    switch (name) {
      case "hardware":
        top = hardware.current.offsetTop - 80;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

        break;
      case "results":
        top = results.current.offsetTop - 80;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
        break;
      case "timeline":
        top = timeline.current.offsetTop - 80;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div>
        <div className={styles.sectionHeader}>
          <h1>An all-in-one solution for airline testing</h1>
          <div className={styles.steps}>
            <span onClick={() => scrollTo("hardware")}>Hardware</span>|
            <span onClick={() => scrollTo("results")}>Results</span>|
            <span onClick={() => scrollTo("timeline")}>Timeline</span>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.section}>
            <h1 ref={hardware}>Hardware</h1>
            <div className={styles.subSection}>
              <LazyImage
                preload
                className={styles.sidebarImage}
                img="/images/device.png"
              />
              <div>
                <div className={styles.iconHeader}>
                  Mobile hardware for rapid data and response
                </div>
                <p>
                  Fio RDT Reader captures and records patient information, reads
                  and transmits tests over the FioNet to a server for complete
                  traceability and immediate review by a certified professional.
                </p>
                link to fio Rdt
              </div>
            </div>
            <div className={styles.subSection}>
              <LazyImage
                className={styles.sidebarImage}
                img="/images/antigen.png"
              />{" "}
              <div>
                <div className={styles.iconHeader}>
                  Antigen Tests for rapid detection
                </div>
                <p>
                  Test-N-Fly uses COVID-19 Antigen Rapid Test kits that detect
                  Antigens indicating an active coronavirus infection. They have
                  equivalent accuracy to RT-PCR (Molecular) tests for patients
                  with a strong viral load.
                </p>
                link to atigen testing
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h1 ref={results}>Results</h1>
            <div className={styles.subSection}>
              <LazyImage
                className={styles.sidebarImage}
                img="/images/lab-technicians.jpg"
              />{" "}
              <div>
                <div className={styles.iconHeader}>
                  Accredited laboratories interpret results
                </div>
                <p>
                  Qualified laboratory technicians from accredited partner
                  laboratories will read, intepret and send the results back to
                  the airline and the passenger. This allows for tests to be
                  done anywhere without the need to set up an on site
                  laboratory.
                </p>
                link to laboratory
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h1 ref={timeline}>Timeline</h1>
            <div className={styles.subSection}>
              <VizSensor
                partialVisibility
                onChange={(isVisible) =>
                  isVisible ? setTriggerClocks(isVisible) : null
                }
              >
                <div
                  className={classNames(styles.integrationIcons, {
                    [styles.showSteps]: showSteps,
                    [styles.trigger]: triggerClocks,
                  })}
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
                    <div style={{ height: "80px", width: "110px" }}></div>
                    <Icon
                      icon
                      delay={2}
                      img="/images/miniTester.png"
                      text="Slide inserted into Fio Rapid Diagnostic Test (RDT) reader providing a controlled environment for safe and reliable reading"
                    />
                  </div>
                  <div className={styles.icon}>
                    <div style={{ height: "80px", width: "110px" }}></div>

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
              </VizSensor>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};