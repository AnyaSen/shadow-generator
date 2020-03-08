import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import ErrorPage from "./ErrorPage";

describe("<ErrorPage />", () => {
  afterEach(cleanup);

  test("Should have correct text and have 2 children.", () => {
    const { getByText, getByTestId, container } = render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    const heading = getByText("Sorry, an error has occured!");

    expect(heading).toBeTruthy();

    const ErrorPageContainer = getByTestId("Error");

    expect(ErrorPageContainer.children.length).toEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
