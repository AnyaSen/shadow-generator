import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import ShadowPage from "./ShadowPage";

import { BoxPropertyProvider } from "../../contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "../../contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "../../contexts/ColorPropertyContext";

describe("<ShadowPage />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BrowserRouter>
      <BoxPropertyProvider>
        <ShadowPropertyProvider>
          <ColorPropertyProvider>
            <ShadowPage />
          </ColorPropertyProvider>
        </ShadowPropertyProvider>
      </BoxPropertyProvider>
    </BrowserRouter>
  );

  test("Should return 2 children.", () => {
    const tree = createRenderTree();

    const { getByTestId, container } = render(tree);

    const shadowPageContainer = getByTestId(`shadowPageContainer`);

    expect(shadowPageContainer.children.length).toEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
