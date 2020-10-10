import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";

export const Homepage = () => {
  const history = useHistory();

  const [showArrow, setShowArrow] = useState();
  const scrollFunction = () => {
    if (window.scrollY > 100) setShowArrow(false);
    if (window.scrollY < 100) setShowArrow(true);
  };
  useEffect(() => {
    setShowArrow(true);
    window.addEventListener("scroll", () => scrollFunction(), true);
    return () => window.removeEventListener("scroll", scrollFunction, true);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainImage}>
        <img src="/images/preboard.jpg" />
        <div className={styles.header}>
          With TEST-N-FLY, Safely take to the skies again
          <p>
            Quick, reliable and secure Covid-19 Antigen testing to give
            passengers the confidence to fly in a Covid-19 free aircraft
            environment.
          </p>
          <Link to="/about-test-n-fly">
            <button> Learn more</button>
          </Link>
        </div>
        <i
          className={classNames("fas fa-angle-double-down", {
            [styles.arrowFade]: !showArrow,
          })}
        ></i>
      </div>
      <div className={classNames(styles.section, styles.testingSection)}>
        <div className={styles.subSection}>
          <Link className={styles.pictureContainer} to="/passengers-back">
            <img src="/images/terminal.jpg" className={styles.swabImage} />
            Bring your passengers back
            <p className={styles.reopen}>
              TEST-N-FLY offers the ability to perform quick, accurate, and
              reliable COVID testing in airports to allow airline to operate at
              a higher capacity and better screen passengers.
            </p>
          </Link>
          <div
            className={styles.pictureContainer}
            onClick={() => history.push("/fly-with-confidence")}
          >
            <img src="/images/family.jpg" />
            Fly with confidence
            <p className={styles.reopen}>
              Confidently take to the skies again knowing that virutally every
              passenger on your flight will be COVID free.
            </p>
          </div>
        </div>
        <div
          className={classNames(styles.subSection, styles.centerSection)}
          style={{ justifyContent: "center" }}
        >
          <img className={styles.sectionLogo} src="/images/full-logo.png" />
        </div>
        <div className={styles.subSection}>
          <div
            className={styles.pictureContainer}
            onClick={() => history.push("/about-test-n-fly#testing")}
          >
            <img src="/images/nasalSwab.jpg" className={styles.swabImage} />
            Quick and accurate testing
            <p className={styles.reopen}>
              Quick, reliable and secure at airport Covid-19 Antigen testing to
              give passengers the confidence to fly in a Covid-19 free aircraft
              environment
            </p>
          </div>
          <div
            className={styles.pictureContainer}
            onClick={() => history.push("/about-test-n-fly")}
          >
            <img src="/images/lab-technicians.jpg" />
            Powered by accredited laboratories
            <p className={styles.reopen}>
              Cofrac and ISO 15189 certified laboratories provide quick and
              reliable off-site COVID-19 test results.
            </p>
          </div>
        </div>
        <div className={styles.quote}>
          <img src="/images/stella.jpeg" />
          <div>
            <i>
              "In the absence of a vaccine, safe and reliable testing is our
              best bet to protect our health care workers, the most vulnerable
              of our citizens and our societies at large.
              <br />
              <strong>
                This is a cornerstone of our roadmap towards lifting coronavirus
                containment measures.
              </strong>
              "
            </i>
            <p>
              - Stella Kyriakides, Europpean Commissioner for Health and Food
              Safety
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
