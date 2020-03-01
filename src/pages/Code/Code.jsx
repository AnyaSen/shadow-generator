import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";

export default function Code() {
  return (
    <div>
      <Layout>
        {" "}
        <h1>Code...</h1>
        <Link to="/">
          {" "}
          <Button text="Go back" />
        </Link>
      </Layout>
    </div>
  );
}
