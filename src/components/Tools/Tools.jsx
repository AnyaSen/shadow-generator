import React from "react";

import Styles from "./Tools.module.scss";

import ToolsNav from "../Tools/ToolsNav/ToolsNav";
import PropertiesNav from "./PropertiesNav/PropertiesNav";
import Properties from "./Properties/Properties";

export default function Tools() {
  return (
    <div className={Styles.ToolsContainer}>
      <ToolsNav />
      <PropertiesNav />
      <Properties />
    </div>
  );
}
