import React from "react";
import Styles from "./PropertyList.module.scss";

import BoxProps from "./BoxProps/BoxProps";
import ShadowProps from "./ShadowProps/ShadowProps";
import ColorProps from "./ColorProps/ColorProps";

export default function PropertyList() {
  return (
    <div data-testid="PropertyList" className={Styles.PropertiesContainer}>
      <BoxProps />
      <ShadowProps />
      <ColorProps />
    </div>
  );
}
