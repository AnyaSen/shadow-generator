import React from "react";
import { render, cleanup } from "@testing-library/react";

import BoxProps from "./BoxProps";

import { BoxPropertyProvider } from "../../../contexts/BoxPropertyContext";

describe("<BoxProps />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BoxPropertyProvider>
      <BoxProps />
    </BoxPropertyProvider>
  );

  test("Should return 5 children and correct text.", () => {
    const tree = createRenderTree();
    const text = "BOX";
    const { getByTestId, getByText, container } = render(tree);

    const shadowPropsContainer = getByTestId(`boxProps`);
    const shadowPropsHeading = getByText(text);

    expect(shadowPropsContainer.children.length).toEqual(5);
    expect(shadowPropsHeading).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
