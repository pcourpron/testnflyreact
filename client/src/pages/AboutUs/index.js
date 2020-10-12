import React from "react";
import styles from "./AboutUs.module.scss";
import classNames from "classnames";
export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.mainImage}>
        <h1>Meet The Team</h1>
        <img src="/images/team.jpg" />
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            alt="AndyOKeeffe-StudioAlto"
            srcset="/images/person.png"
          />
          <div>
            <h4>Daniel Attias</h4>
            <h5>
              <span>Président Biolam, Medical Biologist</span>
            </h5>
            <a
              href="https://www.linkedin.com/in/daniel-attias-631279121/"
              target="_blank"
            >
              <img className={styles.linkedIn} src="/images/linkedin.png" />
            </a>
            <p>
              Daniel Attias has been developing and operating Medical Biology
              Laboratories for 15 years. He grew his Lab company from 4
              laboratories to 46 laboratories by combining organic and external
              growth until the sale to Eurofins in 2018. Daniel is the CEO of
              BIOLAM in charge to perform all the Covid-19 test for Test-N-Fly.
            </p>
          </div>
        </div>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            alt="MarkOKeeffe-StudioAlto"
            srcset="/images/elisabeth.jpeg"
          />
          <div>
            <h4>Elisabeth Lalanne</h4>
            <h5>
              <span>Medical Biologist and technical evaluator at Cofrac</span>
            </h5>
            <a
              href="https://www.linkedin.com/in/elisabeth-lalanne-elslincoln/"
              target="_blank"
            >
              <img className={styles.linkedIn} src="/images/linkedin.png" />
            </a>

            <p>
              Elisabeth has more than 20 years of experience in a private
              laboratory, Quality Director responsible for accreditation
              according to ISO 15189 for more than 10 years. Elisabeth is a
              Cofrac auditor with extensive experiences in diagnostics methods
              accreditations for Medical laboratories. She is in charge of the
              support and implementing adequate regulatory constraints to ensure
              Test-N-Fly provides the best solution for the patients and
              customers.
            </p>
          </div>
        </div>
        <div className="clearTab"></div>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            alt="EuniceYip-StudioAlto"
            srcset="/images/francois.jpeg"
          />
          <div>
            <h4>Francois Dupoteau </h4>
            <h5>
              <span>Engineer, CEO of Magentine Healthcare </span>
            </h5>
            <a
              href="https://www.linkedin.com/in/francois-dupoteau-aaa61113/"
              target="_blank"
            >
              <img className={styles.linkedIn} src="/images/linkedin.png" />
            </a>

            <p>
              Francois Dupoteau has international experience in the In Vitro
              diagnostics and IT in Europe and North America . Francois is a
              cofounders of several Biotech companies and start-ups. He worked
              more than 20 years with companies special­izing in IT healthcare
              solutions and infectious disease diagnostics tests. Francois is
              the CEO of Magentine Healthcare and in charge to implement the
              Test-N-Fly solution.
            </p>
          </div>
        </div>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            src="/images/henri.jpeg"
            alt="Lucy-293x293"
          />
          <div>
            <h4>Henri Courpron</h4>
            <h5>
              <span>Founder & Chairman of Plane View Partners</span>
            </h5>
            <a href="https://www.linkedin.com/in/hcourpron/" target="_blank">
              <img className={styles.linkedIn} src="/images/linkedin.png" />
            </a>
            <p>
              Mr. Courpron has held a number of aviation management executive
              positions including Executive Vice President, Procurement at
              Airbus France, President and Chief Executive Officer of Airbus
              North America, Executive Officer of International Lease Finance
              Corporation ("ILFC"), and President at Seabury Aviation &
              Aerospace. Mr. Courpron is currently the chairman of Plane View
              Partners, an advisory firm focusing on strategy, business model
              development, investor support, M&A, and select aircraft advisory
              work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
