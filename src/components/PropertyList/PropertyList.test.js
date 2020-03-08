import React from "react";
import { render, cleanup } from "@testing-library/react";

import PropertyList from "./PropertyList";

import { BoxPropertyProvider } from "../../contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "../../contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "../../contexts/ColorPropertyContext";

describe("<PropertyList />", () => {
  afterEach(cleanup);

  test("Should return 3 children", () => {
    const { getByTestId, container } = render(
      <BoxPropertyProvider>
        <ShadowPropertyProvider>
          <ColorPropertyProvider>
            <PropertyList />
          </ColorPropertyProvider>
        </ShadowPropertyProvider>
      </BoxPropertyProvider>
    );

    const PropertyListContainer = getByTestId(`PropertyList`);

    expect(PropertyListContainer.children.length).toEqual(3);
    expect(container.firstChild).toMatchSnapshot();
  });
});
