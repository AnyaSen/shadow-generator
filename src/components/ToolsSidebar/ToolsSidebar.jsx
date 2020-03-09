import React from "react";
import Styles from "./ToolsSidebar.module.scss";

import ToolsHeader from "./ToolsHeader/ToolsHeader";
import PropertyList from "../PropertyList/PropertyList";

export default function ToolsSidebar() {
  return (
    <div className={Styles.ToolsContainer} data-testid="toolsSidebar">
      <ToolsHeader />
      <PropertyList />
    </div>
  );
}
