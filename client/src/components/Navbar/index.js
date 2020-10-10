import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
export const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/images/tnf-logo.png" />
          TEST-N-FLY
        </div>
      </Link>

      <i
        className={classNames("fas fa-bars", styles.bars)}
        onClick={() => setShowDrop(!showDrop)}
      ></i>
      <ul className={classNames(styles.links, { [styles.dropDown]: showDrop })}>
        <Link onClick={() => setShowDrop(!showDrop)} to="/partners">
          <li>Partners</li>
        </Link>
        <Link onClick={() => setShowDrop(!showDrop)} to="/about-us">
          <li>About us</li>
        </Link>
        <Link onClick={() => setShowDrop(!showDrop)} to="/contact-us">
          <li>Contact us</li>
        </Link>
        <Link onClick={() => setShowDrop(!showDrop)}>
          <img className={styles.img} src="/images/linkedin.png" />
        </Link>
      </ul>
    </nav>
  );
};
