import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import CodePage from "./CodePage";

import { BoxPropertyProvider } from "../../contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "../../contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "../../contexts/ColorPropertyContext";

describe("<CodePage />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BrowserRouter>
      <BoxPropertyProvider>
        <ShadowPropertyProvider>
          <ColorPropertyProvider>
            <CodePage />
          </ColorPropertyProvider>
        </ShadowPropertyProvider>
      </BoxPropertyProvider>
    </BrowserRouter>
  );

  test("Should return 2 or more children.", () => {
    const tree = createRenderTree();

    const { getByTestId, container } = render(tree);

    const shadowPropsContainer = getByTestId(`codePage`);

    expect(shadowPropsContainer.children.length).toBeGreaterThanOrEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
