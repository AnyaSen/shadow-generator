import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  test("Should contain the correct text", () => {
    const headingText = "SHADOW GENERATOR";

    const tree = createRenderTree();

    const { getByText, container } = render(tree);

    const heading = getByText(headingText);

    expect(heading).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
