import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Code.module.scss";

import Layout from "../../components/Layout/Layout";
import Button from "../../components/Buttons/Button/Button";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

export default function Code() {
  return (
    <div>
      <Layout>
        <div className={Styles.CodePage}>
          <div className={Styles.CodeContainer}>
            <p>Code...</p>
          </div>
          <div className={Styles.BtnContainer}>
            <SecondaryButton text="Copy" />
            <Link to="/">
              <Button text="Go back" />
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
