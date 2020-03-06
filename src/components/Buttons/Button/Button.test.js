import React from "react";
import { render, cleanup } from "@testing-library/react";

import Button from "./Button";

describe("<PrimaryButton />", () => {
  afterEach(cleanup);

  test("Should have correct text.", () => {
    const text = "Generate code";

    const { getByText, container } = render(<Button text={text} />);

    const button = getByText(text);

    expect(button).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
