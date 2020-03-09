import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import ToolsSidebar from "./ToolsSidebar";

import { BoxPropertyProvider } from "../../contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "../../contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "../../contexts/ColorPropertyContext";

describe("<ToolsSidebar />", () => {
  afterEach(cleanup);

  const createRenderTree = () => (
    <BrowserRouter>
      <BoxPropertyProvider>
        <ShadowPropertyProvider>
          <ColorPropertyProvider>
            <ToolsSidebar />
          </ColorPropertyProvider>
        </ShadowPropertyProvider>
      </BoxPropertyProvider>
    </BrowserRouter>
  );

  test("Should return 2 children.", () => {
    const tree = createRenderTree();

    const { getByTestId, container } = render(tree);

    const sidebarContainer = getByTestId(`toolsSidebar`);

    expect(sidebarContainer.children.length).toEqual(2);
    expect(container.firstChild).toMatchSnapshot();
  });
});
