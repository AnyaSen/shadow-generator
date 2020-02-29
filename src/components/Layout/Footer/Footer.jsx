import React from "react";

import Styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={Styles.Footer}>
      <p>
        Created by{" "}
        <a
          href="https://portfolio-anna-senchikhina.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anna Senchikhina
        </a>
      </p>
    </div>
  );
}
