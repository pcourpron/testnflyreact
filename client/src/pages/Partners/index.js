import React from "react";
import styles from "./partners.module.scss";
import classNames from "classnames";
const partners = [
  {
    img: "/images/magentine.png",
    text: `Founded by Francois Dupoteau Ing. Francois Dupoteau is the co-founder of several Biotech companies and startups. He is the inventor of
        several technologies in the field of infectious diseases and pandemic monitoring. Magentine currently has the exclusive license to
        develop, distribute and support the FioNet solution in Europe.`,
  },
  {
    img: "images/fio.jpg",
    text: `The Fio Corporation designed the Fio RDT reader in collaboration with Magentine executives and is being manufactured in the USA. The Fio Corporation 
        developed the FioNet solution, the world's first integrated guidance & tracking IT platform for decentralized
        healthcare settings. The Fio Corporation operates globally in partnership with local distribution, service, and support
        organizations and also partners with other companies that license its technologies.`,
  },
  {
    img: "/images/testLogo.png",
    text: `Nal von minden is one of the most recognized rapid test manufacturers in Europe.  Their design and the quality control of their complete test in Germany is based on the ISO 13485 standard.`,
  },
  {
    img: "/images/biolam.png",
    text:
      "Biolam is our accredited laboratory partner in France for the certification of Covid-19 test results. They are both Cofrac and ISO 15189 certified.",
  },
  {
    img: "/images/sillab.png",
    text:
      "Sil-lab is our mobile application partner in healthcare data. They are accredited and RGPD approved and are a provider to many of the most important labs in France.",
  },
  {
    img: "/images/oragne.png",
    text:
      "Orange Healthcare is our cloud solution. Our IT system is hosted and certified by Orange Healthcare to be both HIPAA and RGPD compliant.",
  },
  {
    img: "/images/pvplogo.png",
    text: `Plane View Partners is a leading commercial aviation and aerospace advisory, with experienced industry executives. The have worked with airlines around the world to mitigate the impact of COVID-19 on commercial aviation.`,
  },
];

export const Partners = () => {
  return (
    <div className={styles.partnerPage}>
      <h1 className={styles.title}>Partners</h1>
      {partners.map((partner) => (
        <p className={styles.info}>
          <img
            src={partner.img}
            className={classNames(styles.partnerImg, {
              [styles.nal]: partner.img === "/images/testLogo.png",
              [styles.pvp]: partner.img === "/images/pvplogo.png",
            })}
          />{" "}
          {partner.text}
        </p>
      ))}
    </div>
  );
};
