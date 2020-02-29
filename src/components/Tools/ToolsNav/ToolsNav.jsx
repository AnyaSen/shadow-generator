import React from "react";

import Styles from "./ToolsNav.module.scss";

import Button from "../../Button/Button";

export default function ToolsNav() {
  return (
    <div className={Styles.ToolsNav}>
      <h2>TOOLS</h2>
      <Button />
    </div>
  );
}
