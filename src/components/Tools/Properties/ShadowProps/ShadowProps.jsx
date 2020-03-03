import React, { useContext } from "react";
import Styles from "./ShadowProps.module.scss";
import { ValueContext } from "../../../../contexts/ValueContext";

import ValueSlider from "../../../ValueSlider/ValueSlider";

export default function ShadowProps() {
  const {
    shiftHorizontically,
    ChangeShiftHorizontically,
    shiftVertically,
    ChangeShiftVertically,
    blurValue,
    ChangeBlurValue,
    opacityValue,
    ChangeOpacityValue
  } = useContext(ValueContext);

  return (
    <div className={Styles.ShadowProps}>
      <h1>SHADOW</h1>
      <ValueSlider
        heading="shift horizontically"
        value={shiftHorizontically}
        handleChange={ChangeShiftHorizontically}
        maxValue={15}
        minValue={-15}
      />
      <ValueSlider
        heading="shift vertically"
        value={shiftVertically}
        handleChange={ChangeShiftVertically}
        maxValue={10}
        minValue={-10}
      />
      <ValueSlider
        heading="blur"
        value={blurValue}
        handleChange={ChangeBlurValue}
        maxValue={10}
        minValue={0}
      />
      <ValueSlider
        heading="opacity"
        value={opacityValue}
        handleChange={ChangeOpacityValue}
        maxValue={1}
        minValue={0}
      />
    </div>
  );
}
