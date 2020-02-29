import React from "react";

import Styles from "./PropertyNav.module.scss";

export default function PropertyNav({ img, text }) {
  return (
    <div className={Styles.PropertyNav}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
}
