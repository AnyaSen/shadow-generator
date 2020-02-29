import React from "react";

import Layout from "../../components/Layout/Layout";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import Tools from "../../components/Tools/Tools";

import Styles from "./ShadowApp.module.scss";

export default function ShadowApp() {
  return (
    <div>
      <Layout>
        <div className={Styles.ShadowAppContainer}>
          <ShadowBox />
          <Tools />
        </div>
      </Layout>
    </div>
  );
}
