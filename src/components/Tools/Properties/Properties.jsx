import React from "react";

import Styles from "./Properties.module.scss";

import BoxProps from "./BoxProps/BoxProps";
import ShadowProps from "./ShadowProps/ShadowProps";
import ColorProps from "./ColorProps/ColorProps";

export default function Properties() {
  return (
    <div className={Styles.PropertiesContainer}>
      <BoxProps />
      <ShadowProps />
      <ColorProps />
    </div>
  );
}
