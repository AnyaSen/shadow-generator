import React from "react";

import Styles from "./Button.module.scss";

export default function Button({ text }) {
  return <button className={Styles.Button}>{text}</button>;
}
