import React from "react";
import { render, cleanup } from "@testing-library/react";

import ShadowProps from "./ShadowProps";

import { ShadowPropertyProvider } from "../../../contexts/ShadowPropertyContext";

describe("<ShadowProps />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <ShadowPropertyProvider>
      <ShadowProps />
    </ShadowPropertyProvider>
  );

  test("Should return 5 children and correct text.", () => {
    const tree = createRenderTree();
    const text = "SHADOW";
    const { getByTestId, getByText, container } = render(tree);

    const shadowPropsContainer = getByTestId(`shadowProps`);
    const shadowPropsHeading = getByText(text);

    expect(shadowPropsContainer.children.length).toEqual(5);
    expect(shadowPropsHeading).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
