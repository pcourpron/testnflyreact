import VizSensor from "react-visibility-sensor";
import React, { useState } from "react";
import styles from "./lazyimage.module.scss";
import classNames from "classnames";
export default ({ img, icon, text, className, preload }) => {
  const [loaded, setLoaded] = useState(preload);

  return (
    <VizSensor
      partialVisibility
      onChange={(isVisible) => {
        if (isVisible) setLoaded(isVisible);
      }}
    >
      {loaded ? (
        <>
          <img className={classNames(styles.lazyLoaded, className)} src={img} />
          {text}
        </>
      ) : (
        <div style={{ height: "20px", width: "20px" }} />
      )}
    </VizSensor>
  );
};
