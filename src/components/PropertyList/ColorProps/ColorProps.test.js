import React from "react";
import { render, cleanup } from "@testing-library/react";

import ColorProps from "./ColorProps";

import { BoxPropertyProvider } from "../../../contexts/BoxPropertyContext";
import { ColorPropertyProvider } from "../../../contexts/ColorPropertyContext";

describe("<ColorProps />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BoxPropertyProvider>
      <ColorPropertyProvider>
        <ColorProps />
      </ColorPropertyProvider>
    </BoxPropertyProvider>
  );

  test("Should return 2 children and correct text.", () => {
    const tree = createRenderTree();
    const text = "COLOR";
    const { getByTestId, getByText, container } = render(tree);

    const shadowPropsContainer = getByTestId(`colorProps`);
    const shadowPropsHeading = getByText(text);

    expect(shadowPropsContainer.children.length).toEqual(2);
    expect(shadowPropsHeading).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
