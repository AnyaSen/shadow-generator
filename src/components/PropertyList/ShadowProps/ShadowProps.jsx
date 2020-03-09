import React, { useContext } from "react";
import Styles from "./ShadowProps.module.scss";

import ValueSlider from "../../ValueSlider/ValueSlider";

import { ShadowPropertyContext } from "../../../contexts/ShadowPropertyContext";

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
  } = useContext(ShadowPropertyContext);

  return (
    <div className={Styles.ShadowProps} data-testid="shadowProps">
      <h1>SHADOW</h1>

      <ValueSlider
        heading="shift horizontically"
        value={shiftHorizontically}
        handleChange={ChangeShiftHorizontically}
        maxValue={200}
        minValue={-200}
      />

      <ValueSlider
        heading="shift vertically"
        value={shiftVertically}
        handleChange={ChangeShiftVertically}
        maxValue={100}
        minValue={-100}
      />

      <ValueSlider
        heading="blur"
        value={blurValue}
        handleChange={ChangeBlurValue}
        maxValue={100}
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
