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
        <li onClick={() => setShowDrop(!showDrop)}>
          <Link to="/partners">Partners</Link>
        </li>
        <li onClick={() => setShowDrop(!showDrop)}>
          <Link to="/about-us">About Us</Link>
        </li>
        <li onClick={() => setShowDrop(!showDrop)}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li onClick={() => setShowDrop(!showDrop)}>
          <img className={styles.img} src="/images/linkedin.webp" />
        </li>
      </ul>
    </nav>
  );
};
