import React from "react";
import { render, cleanup } from "@testing-library/react";

import ShadowBox from "./ShadowBox";

import { BoxPropertyProvider } from "../../contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "../../contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "../../contexts/ColorPropertyContext";

describe("<ShadowBox />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BoxPropertyProvider>
      <ShadowPropertyProvider>
        <ColorPropertyProvider>
          <ShadowBox />
        </ColorPropertyProvider>
      </ShadowPropertyProvider>
    </BoxPropertyProvider>
  );

  test("Should have have a child.", () => {
    const tree = createRenderTree();

    const { getByTestId, container } = render(tree);

    const ShadowBoxContainer = getByTestId("Box");

    expect(ShadowBoxContainer.children.length).toEqual(1);

    expect(container.firstChild).toMatchSnapshot();
  });
});
