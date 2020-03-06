import React from "react";
import { render, cleanup } from "@testing-library/react";

import ColorPicker from "./ColorPicker";

describe("<ColorPicker />", () => {
  afterEach(cleanup);

  test("Should have correct text and have 2 children", () => {
    const headerText = "box";

    const { getByText, getByTestId, container } = render(
      <ColorPicker header={headerText} />
    );

    const header = getByText(`${headerText} color`);
    const colorPickerContainer = getByTestId(`ColorPicker`);

    expect(header).toBeTruthy();
    expect(colorPickerContainer.children.length).toEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
