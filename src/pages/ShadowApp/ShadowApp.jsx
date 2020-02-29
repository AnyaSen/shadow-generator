import React from "react";
import Layout from "../../components/Layout/Layout";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import Tools from "../../components/Tools/Tools";

export default function ShadowApp() {
  return (
    <div>
      <Layout>
        <ShadowBox />
        <Tools />
      </Layout>
    </div>
  );
}
