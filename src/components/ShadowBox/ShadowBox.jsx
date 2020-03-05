import React, { useContext } from "react";
import Styles from "./ShadowBox.module.scss";
import hexToRgba from "hex-to-rgba";

import { BoxPropertyContext } from "../../contexts/BoxPropertyContext";
import { ColorPropertyContext } from "../../contexts/ColorPropertyContext";
import { ShadowPropertyContext } from "../../contexts/ShadowPropertyContext";

export default function ShadowBox() {
  const { heightValue, widthValue, borderValue, radiusValue } = useContext(
    BoxPropertyContext
  );
  const {
    shiftHorizontically,
    shiftVertically,
    opacityValue,
    blurValue
  } = useContext(ShadowPropertyContext);

  const { boxColor, shadowColor, borderColor, bgColor } = useContext(
    ColorPropertyContext
  );

  return (
    <div
      className={Styles.ShadowBoxContainer}
      style={{ backgroundColor: bgColor }}
    >
      <div
        style={{
          height: `${heightValue}px`,
          width: `${widthValue}px`,
          boxShadow: `${shiftHorizontically}px ${shiftVertically}px ${blurValue}px ${hexToRgba(
            shadowColor,
            opacityValue
          )}`,
          border: `${borderValue}px solid ${borderColor}`,
          borderRadius: `${radiusValue}px`,
          backgroundColor: boxColor
        }}
        className={Styles.ShadowBox}
      ></div>
    </div>
  );
}
