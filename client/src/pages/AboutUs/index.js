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
            srcset="https://www.studioalto.com/wp-content/uploads/2013/09/AndyOKeeffe-StudioAlto-293x293.jpg, https://www.studioalto.com/wp-content/uploads/2013/09/AndyOKeeffe-StudioAlto-293x293@2x.jpg 2x"
          />
          <div>
            <h4>Andrew O’Keeffe</h4>
            <h5>
              <span>
                Bachelor of Design (Graphic Design) (Honours) RMIT University
              </span>
            </h5>
            <img className={styles.linkedIn} src="/images/linkedin.webp" />

            <p>
              Officia tempor incididunt cupidatat reprehenderit ut adipisicing
              tempor Lorem ipsum cillum aliquip incididunt labore. Cillum et
              enim eu quis sunt veniam cupidatat adipisicing sunt.
            </p>
          </div>
        </div>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            alt="MarkOKeeffe-StudioAlto"
            srcset="https://www.studioalto.com/wp-content/uploads/2013/09/MarkOKeeffe-StudioAlto-293x293.jpg, https://www.studioalto.com/wp-content/uploads/2013/09/MarkOKeeffe-StudioAlto-293x293@2x.jpg 2x"
          />
          <div>
            <h4>Mark O’Keeffe</h4>
            <h5>
              <span>Bachelor of Design (Graphic Design) RMIT University</span>
            </h5>
            <img className={styles.linkedIn} src="/images/linkedin.webp" />

            <p>
              Officia tempor incididunt cupidatat reprehenderit ut adipisicing
              tempor Lorem ipsum cillum aliquip incididunt labore. Cillum et
              enim eu quis sunt veniam cupidatat adipisicing sunt.
            </p>
          </div>
        </div>
        <div className="clearTab"></div>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            alt="EuniceYip-StudioAlto"
            srcset="https://www.studioalto.com/wp-content/uploads/2013/09/EuniceYip-StudioAlto-293x293.jpg, https://www.studioalto.com/wp-content/uploads/2013/09/EuniceYip-StudioAlto-293x293@2x.jpg 2x"
          />
          <div>
            <h4>Eunice Yip</h4>
            <h5>
              <span>
                Bachelor of Design (Communication Design) (Honours) RMIT
                University
              </span>
            </h5>
            <img className={styles.linkedIn} src="/images/linkedin.webp" />

            <p>
              Officia tempor incididunt cupidatat reprehenderit ut adipisicing
              tempor Lorem ipsum cillum aliquip incididunt labore. Cillum et
              enim eu quis sunt veniam cupidatat adipisicing sunt.
            </p>
          </div>
        </div>
        <div className={styles.person}>
          <img
            className={styles.discImg}
            src="https://www.studioalto.com/wp-content/uploads/2017/08/Lucy-StudioAlto-293x293.jpg"
            alt="Lucy-293x293"
          />
          <div>
            <h4>Lucy Boehme</h4>
            <h5>
              <span>
                Bachelor of Communication Design (Honours) Swinburne University
              </span>
            </h5>
            <img className={styles.linkedIn} src="/images/linkedin.webp" />

            <p>
              Officia tempor incididunt cupidatat reprehenderit ut adipisicing
              tempor Lorem ipsum cillum aliquip incididunt labore. Cillum et
              enim eu quis sunt veniam cupidatat adipisicing sunt.
            </p>
          </div>
        </div>
        <div className="clearTab"></div>
      </div>
    </div>
  );
};
