import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div>
          <ul className={styles.footerLinks}>
            <Link to="/">Home</Link>

            <Link to="/about-test-n-fly">About TEST-N-FLY</Link>

            <Link to="/passengers-back">Bring your passengers back !</Link>

            <Link to="/fly-with-confidence">Fly with confidence</Link>

            <Link to="/partners">Partners</Link>

            <Link to="/about-us">About Us</Link>

            <Link to="/contact-us">Contact Us</Link>
          </ul>
        </div>
        <div className={styles.legal}>
          TEST-N-FLY, the associated logo, and all associated TEST-N-FLY marks
          are the registered trademarks of TEST-N-FLY. All third-party marks—®'
          and ™'—are the property of their respective owners. © 2020 TEST-N-FLY
          Incorporated. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
