import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={Styles.Layout}>
      <Header />
      <div className={Styles.childrenContainer}> {children}</div>
      <Footer />
    </div>
  );
}
