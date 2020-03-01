import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={Styles.Header}>
      <Link to="/">
        <h1>SHADOW GENERATOR</h1>
      </Link>
    </div>
  );
}
