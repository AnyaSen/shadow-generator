import React from "react";
import Styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import Layout from "../../components/Layout/Layout";

export default function ErrorPage() {
  return (
    <Layout>
      <div className={Styles.errorContainer}>
        <h1 className={Styles.error}>Sorry, an error has occured!</h1>
        <Link to="/">
          <SecondaryButton text="Go Back" />
        </Link>
      </div>
    </Layout>
  );
}
