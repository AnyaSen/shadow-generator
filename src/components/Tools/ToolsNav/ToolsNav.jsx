import React from "react";
import { Link } from "react-router-dom";

import Styles from "./ToolsNav.module.scss";

import Button from "../../Button/Button";

export default function ToolsNav() {
  return (
    <div className={Styles.ToolsNav}>
      <h2>TOOLS</h2>
      <Link to="/code">
        <Button text="Generate Code" />
      </Link>
    </div>
  );
}
