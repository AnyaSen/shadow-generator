import React from "react";
import Styles from "./ToolsHeader.module.scss";
import { Link } from "react-router-dom";

import Button from "../../Buttons/Button/Button";

export default function ToolsHeader() {
  return (
    <div className={Styles.ToolsNav}>
      <h2>TOOLS</h2>

      <Link to="/code">
        <Button text="Generate Code" />
      </Link>
    </div>
  );
}
