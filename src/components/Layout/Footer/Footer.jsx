import React from "react";
import Styles from "./Footer.module.scss";

export default function Footer({ codePage }) {
  const linkedIn_URL = "https://www.linkedin.com/in/anna-senchikhina/";

  return (
    <div className={codePage ? Styles.FooterCodePage : Styles.Footer}>
      <p>
        Created by{" "}
        <a href={linkedIn_URL} target="_blank" rel="noopener noreferrer">
          Anna Senchikhina
        </a>
      </p>
    </div>
  );
}
