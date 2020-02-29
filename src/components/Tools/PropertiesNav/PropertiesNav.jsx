import React from "react";

import Styles from "./PropertiesNav.module.scss";

import boxSvg from "../../../assets/img/box.svg";
import shadowSvg from "../../../assets/img/shadow.svg";
import borderSvg from "../../../assets/img/border.svg";
import colorSvg from "../../../assets/img/color.svg";

import PropertyNav from "./PropertyNav/PropertyNav";

export default function PropertiesNav() {
  return (
    <div className={Styles.PropertiesNavContainer}>
      <PropertyNav text="BOX" img={boxSvg} />
      <PropertyNav text="SHADOW" img={shadowSvg} />
      <PropertyNav text="BORDER" img={borderSvg} />
      <PropertyNav text="COLOR" img={colorSvg} />
    </div>
  );
}
