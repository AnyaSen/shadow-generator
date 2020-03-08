import React from "react";
import { render, cleanup } from "@testing-library/react";

import ShadowBox from "./ShadowBox";

import { BoxPropertyProvider } from "../../contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "../../contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "../../contexts/ColorPropertyContext";

describe("<ShadowBox />", () => {
  afterEach(cleanup);

  test("Should have have a child.", () => {
    const { getByTestId, container } = render(
      <BoxPropertyProvider>
        <ShadowPropertyProvider>
          <ColorPropertyProvider>
            <ShadowBox />
          </ColorPropertyProvider>
        </ShadowPropertyProvider>
      </BoxPropertyProvider>
    );

    const ShadowBoxContainer = getByTestId("Box");

    expect(ShadowBoxContainer.children.length).toEqual(1);

    expect(container.firstChild).toMatchSnapshot();
  });
});
