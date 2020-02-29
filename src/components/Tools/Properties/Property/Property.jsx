import React from "react";

import Styles from "./Property.module.scss";

export default function Property({ heading }) {
  return (
    <div className={Styles.PropertyContainer}>
      <h2>{heading}</h2>
      <p>width</p>
      <p>height</p>
      <p>border-radius</p>
    </div>
  );
}
