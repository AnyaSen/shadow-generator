import React from "react";
import Styles from "./Layout.module.scss";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div data-testid="Layout" className={Styles.Layout}>
      <Header />
      <div className={Styles.childrenContainer}>{children}</div>
      <Footer />
    </div>
  );
}
