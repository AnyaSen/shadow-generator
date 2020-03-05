import React from "react";
import Styles from "./ShadowPage.module.scss";

import Layout from "../../components/Layout/Layout";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import ToolsSidebar from "../../components/ToolsSidebar/ToolsSidebar";

export default function ShadowPage() {
  return (
    <div>
      <Layout>
        <div className={Styles.ShadowAppContainer}>
          <ShadowBox />
          <ToolsSidebar />
        </div>
      </Layout>
    </div>
  );
}
