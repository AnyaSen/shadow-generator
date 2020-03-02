import React from "react";

import Styles from "./SecondaryButton.module.scss";

export default function SecondaryButton({ text }) {
  return <button className={Styles.Button}>{text}</button>;
}
