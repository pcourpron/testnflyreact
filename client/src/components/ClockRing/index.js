import styles from "./clock.module.scss";
import React, { useState, useEffect } from "react";
export default ({ radius, stroke, progress, text, delay, trigger }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [strokeDashoffset, setInitProgress] = useState(circumference);

  useEffect(() => {
    if (trigger)
      setInitProgress(circumference - (progress / 100) * circumference);
  }, [progress, trigger]);
  return (
    <svg height={radius * 2} width={radius * 2} style={{ marginRight: "30px" }}>
      <circle
        stroke="black"
        fill="white"
        strokeWidth={"1px"}
        style={{ strokeDashoffset }}
        stroke-width={"1px"}
        r={normalizedRadius + stroke / 2}
        cx={radius}
        cy={radius}
      />
      <circle
        className={styles.clock}
        stroke="#456eb6"
        fill="white"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        style={{
          strokeDashoffset,
          transform: "rotate(-90deg)",
          transformOrigin: "center",
          transition: "1s",
          transitionDelay: delay,
        }}
        stroke-width={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      <circle
        stroke="black"
        fill="transparent"
        strokeWidth={"1px"}
        style={{ strokeDashoffset }}
        stroke-width={"1px"}
        r={normalizedRadius - stroke / 2}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={14}
      >
        {text}
      </text>
    </svg>
  );
};
