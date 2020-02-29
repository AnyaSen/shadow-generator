import React from "react";

import Styles from "./ShadowBox.module.scss";

export default function ShadowBox() {
  return (
    <div className={Styles.ShadowBoxContainer}>
      <div className={Styles.ShadowBox}></div>
    </div>
  );
}
