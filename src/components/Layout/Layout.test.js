import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";

const createRenderTree = () => (
  <BrowserRouter>
    <Layout>
      <h1>child</h1>
      <h1>child</h1>
    </Layout>
  </BrowserRouter>
);

describe("<Layout />", () => {
  afterEach(cleanup);

  const childrenText = "child";

  test("Should return navbar, footer and children", () => {
    const tree = createRenderTree();

    const { getByTestId, getAllByText } = render(tree);

    const layoutContainer = getByTestId("Layout");
    const allPassedChildren = getAllByText(childrenText);

    expect(layoutContainer.children.length).toEqual(3);
    expect(allPassedChildren.length).toEqual(2);
  });
});
