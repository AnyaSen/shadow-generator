import React, { useContext } from "react";
import Styles from "./BoxProps.module.scss";

import ValueSlider from "../../ValueSlider/ValueSlider";

import { BoxPropertyContext } from "../../../contexts/BoxPropertyContext";

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
  } = useContext(BoxPropertyContext);

  return (
    <div className={Styles.BoxProps}>
      <h1>BOX</h1>

      <ValueSlider
        heading="height"
        value={heightValue}
        handleChange={ChangeHeightValue}
        maxValue={350}
        minValue={16}
      />

      <ValueSlider
        heading="width"
        value={widthValue}
        handleChange={ChangeWidthValue}
        maxValue={350}
        minValue={16}
      />
      <ValueSlider
        heading="border"
        value={borderValue}
        handleChange={ChangeBorderValue}
        maxValue={12}
      />

      <ValueSlider
        heading="border-radius"
        value={radiusValue}
        handleChange={ChangeRadiusValue}
        maxValue={175}
      />
    </div>
  );
}
