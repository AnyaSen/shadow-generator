import React from "react";
import ToolsNav from "../Tools/ToolsNav/ToolsNav";
import PropertiesNav from "./PropertiesNav/PropertiesNav";
import Property from "./Property/Property";

export default function Tools() {
  return (
    <div>
      <ToolsNav />
      <PropertiesNav />
      <Property />
    </div>
  );
}
