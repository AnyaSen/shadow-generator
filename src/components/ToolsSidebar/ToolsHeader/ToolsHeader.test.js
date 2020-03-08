import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import ToolsHeader from "./ToolsHeader";

describe("<ToolsHeader />", () => {
  afterEach(cleanup);

  test("Should have correct text and have 2 children.", () => {
    const { getByText, getByTestId, container } = render(
      <BrowserRouter>
        <ToolsHeader />
      </BrowserRouter>
    );
    const hearderText = "TOOLS";

    const toolsHeader = getByText(hearderText);

    const toolsHeaderContainer = getByTestId("Header");

    expect(toolsHeaderContainer.children.length).toEqual(2);

    expect(toolsHeader).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
