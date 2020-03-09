import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import ErrorPage from "./ErrorPage";

describe("<ErrorPage />", () => {
  afterEach(cleanup);
  const createRenderTree = () => (
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );
  test("Should have correct text and have 2 children.", () => {
    const tree = createRenderTree();

    const { getByText, getByTestId, container } = render(tree);

    const heading = getByText("Sorry, an error has occured!");
    const ErrorPageContainer = getByTestId("Error");

    expect(heading).toBeTruthy();
    expect(ErrorPageContainer.children.length).toEqual(2);
    expect(container.firstChild).toMatchSnapshot();
  });
});
