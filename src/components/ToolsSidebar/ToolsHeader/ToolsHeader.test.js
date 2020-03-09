import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import ToolsHeader from "./ToolsHeader";

describe("<ToolsHeader />", () => {
  afterEach(cleanup);

  test("Should have correct text and have 2 children.", () => {
    const createRenderTree = () => (
      <BrowserRouter>
        <ToolsHeader />
      </BrowserRouter>
    );
    const tree = createRenderTree();

    const { getByText, getByTestId, container } = render(tree);
    const hearderText = "TOOLS";

    const toolsHeader = getByText(hearderText);

    const toolsHeaderContainer = getByTestId("Header");

    expect(toolsHeaderContainer.children.length).toEqual(2);

    expect(toolsHeader).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
