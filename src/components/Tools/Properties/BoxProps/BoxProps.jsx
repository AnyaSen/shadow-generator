import React, { useContext } from "react";

import Styles from "./BoxProps.module.scss";
import { ValueContext } from "../../../../contexts/ValueContext";

import ValueSlider from "../../../ValueSlider/ValueSlider";

export default function BoxProps() {
  const {
    heightValue,
    ChangeHeightValue,
    widthValue,
    ChangeWidthValue,
    borderValue,
    ChangeBorderValue,
    radiusValue,
    ChangeRadiusValue
  } = useContext(ValueContext);

  return (
    <div className={Styles.BoxProps} id="box">
      <h1>BOX</h1>
      <ValueSlider
        heading="height"
        value={heightValue}
        handleChange={ChangeHeightValue}
        maxValue={60}
        minValue={1}
      />
      <ValueSlider
        heading="width"
        value={widthValue}
        handleChange={ChangeWidthValue}
        maxValue={70}
        minValue={1}
      />
      <ValueSlider
        heading="border"
        value={borderValue}
        handleChange={ChangeBorderValue}
        maxValue={3}
        minValue={0}
      />
      <ValueSlider
        heading="border-radius"
        value={radiusValue}
        handleChange={ChangeRadiusValue}
        maxValue={25}
      />
    </div>
  );
}
