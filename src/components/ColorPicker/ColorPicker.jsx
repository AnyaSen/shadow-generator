import React from "react";
import Styles from "./ColorPicker.module.scss";

import { CompactPicker } from "react-color";

export default function ColorPicker({ header, color, handleChange }) {
  return (
    <div className={Styles.ColorPicker}>
      <p>{header} color</p>
      <CompactPicker color={color} onChangeComplete={handleChange} />
    </div>
  );
}
