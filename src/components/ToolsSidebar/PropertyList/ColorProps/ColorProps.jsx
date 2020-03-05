import React, { useContext } from "react";
import Styles from "./ColorProps.module.scss";

import ColorPicker from "../../../ColorPicker/ColorPicker";

import { ColorPropertyContext } from "../../../../contexts/ColorPropertyContext";
import { BoxPropertyContext } from "../../../../contexts/BoxPropertyContext";

export default function ColorProps() {
  const {
    boxColor,
    ChangeBoxColor,
    ChangeShadowColor,
    shadowColor,
    ChangeBgColor,
    bgColor,
    ChangeBorderColor,
    borderColor
  } = useContext(ColorPropertyContext);

  const { borderValue } = useContext(BoxPropertyContext);

  return (
    <div className={Styles.ColorPropsContainer}>
      <h1>COLOR</h1>

      <div className={Styles.ColorPickersContainer}>
        <ColorPicker
          header="box"
          color={boxColor}
          handleChange={ChangeBoxColor}
        />

        <ColorPicker
          header="shadow"
          color={shadowColor}
          handleChange={ChangeShadowColor}
        />

        <ColorPicker
          header="background"
          color={bgColor}
          handleChange={ChangeBgColor}
        />

        {borderValue !== 0 ? (
          <ColorPicker
            header="border"
            color={borderColor}
            handleChange={ChangeBorderColor}
          />
        ) : null}
      </div>
    </div>
  );
}
