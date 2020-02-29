import React from "react";

import Styles from "./Properties.module.scss";

import Property from "./Property/Property";

export default function Properties() {
  return (
    <div className={Styles.PropertiesContainer}>
      <Property heading="BOX" />
      <Property heading="SHADOW" />
      <Property heading="BORDER" />
      <Property heading="COLOR" />
    </div>
  );
}
