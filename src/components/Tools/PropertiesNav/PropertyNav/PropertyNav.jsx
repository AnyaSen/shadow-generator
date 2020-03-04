import React from "react";
import Styles from "./PropertyNav.module.scss";

export default function PropertyNav({ img, text, to }) {
  return (
    <div className={Styles.PropertyNav}>
      <a href={to}>
        <img src={img} alt={text} />
        <p>{text}</p>
      </a>
    </div>
  );
}
