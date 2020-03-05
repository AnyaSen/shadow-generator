import React from "react";
import Styles from "./CodeTemplate.module.scss";
import hexToRgba from "hex-to-rgba";

export default function CodeTemplate({
  heightValue,
  widthValue,
  borderValue,
  radiusValue,
  boxColor,
  shadowColor,
  borderColor,
  bgColor,
  shiftHorizontically,
  shiftVertically,
  opacityValue,
  blurValue
}) {
  return (
    <pre className={Styles.code}>
      {`.backgroundContainer{ 
          background-color: ${bgColor}

          .shadowBox{
            height: ${heightValue}px;
            width: ${widthValue}px;
            box-shadow: ${shiftHorizontically}px ${shiftVertically}px ${blurValue}px ${hexToRgba(
        shadowColor,
        opacityValue
      )};
            border-radius: ${radiusValue}px;
            background-color: ${boxColor};
            ${
              borderValue !== 0
                ? `border: ${borderValue}px solid ${borderColor};`
                : ""
            }
}
}`}
    </pre>
  );
}
