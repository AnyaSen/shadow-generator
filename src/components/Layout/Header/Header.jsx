import React from "react";
import Styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={Styles.Header}>
      <Link to="/">
        <h1>SHADOW GENERATOR</h1>
      </Link>
    </div>
  );
}
