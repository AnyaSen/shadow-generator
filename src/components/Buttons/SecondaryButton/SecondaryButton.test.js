import React from "react";
import { render, cleanup } from "@testing-library/react";

import SecondaryButton from "./SecondaryButton";

describe("<SecondaryButton />", () => {
  afterEach(cleanup);

  test("Should have correct text.", () => {
    const text = "Go Back";

    const { getByText, container } = render(<SecondaryButton text={text} />);

    const button = getByText(text);

    expect(button).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
