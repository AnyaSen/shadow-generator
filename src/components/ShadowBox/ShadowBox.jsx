import React, { useContext } from "react";

import Styles from "./ShadowBox.module.scss";

import { ValueContext } from "../../contexts/ValueContext";

export default function ShadowBox() {
  const {
    heightValue,
    widthValue,
    borderValue,
    radiusValue,
    shiftHorizontically,
    shiftVertically,
    opacityValue,
    blurValue
  } = useContext(ValueContext);
  return (
    <div className={Styles.ShadowBoxContainer}>
      <div
        style={{
          height: `${heightValue}rem`,
          width: `${widthValue}rem`,
          boxShadow: `${shiftHorizontically}rem  ${shiftVertically}rem ${blurValue}rem rgba(195, 195, 195, ${opacityValue})`,
          border: `${borderValue}rem solid black`,
          borderRadius: `${radiusValue}rem`,
          backgroundColor: "#f3f3f3"
        }}
        className={Styles.ShadowBox}
      ></div>
    </div>
  );
}
