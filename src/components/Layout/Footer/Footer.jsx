import React from "react";
import Styles from "./Footer.module.scss";

export default function Footer({ codePage }) {
  const portfolio_URL = "https://portfolio-anna-senchikhina.netlify.com/";

  return (
    <div className={codePage ? Styles.FooterCodePage : Styles.Footer}>
      <p>
        Created by{" "}
        <a href={portfolio_URL} target="_blank" rel="noopener noreferrer">
          Anna Senchikhina
        </a>
      </p>
    </div>
  );
}
