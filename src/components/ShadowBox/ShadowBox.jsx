import React, { useContext } from "react";
import hexToRgba from "hex-to-rgba";

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
    blurValue,
    boxColor,
    shadowColor,
    bgColor,
    borderColor
  } = useContext(ValueContext);

  return (
    <div
      className={Styles.ShadowBoxContainer}
      style={{ backgroundColor: bgColor }}
    >
      <div
        style={{
          height: `${heightValue}rem`,
          width: `${widthValue}rem`,
          boxShadow: `${shiftHorizontically}rem ${shiftVertically}rem ${blurValue}rem ${hexToRgba(
            shadowColor,
            opacityValue
          )}`,
          border: `${borderValue}rem solid ${borderColor}`,
          borderRadius: `${radiusValue}rem`,
          backgroundColor: boxColor
        }}
        className={Styles.ShadowBox}
      ></div>
    </div>
  );
}
