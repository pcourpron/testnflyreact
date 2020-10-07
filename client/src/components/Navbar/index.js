import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/images/tnf-logo.png" />
          TEST-N-FLY
        </div>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link to="/partners">Partners</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};
