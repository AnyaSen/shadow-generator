import React from "react";
import { render, cleanup } from "@testing-library/react";

import ValueSlider from "./ValueSlider";

describe("<ValueSlider />", () => {
  afterEach(cleanup);

  test("Should have correct text and have 2 children.", () => {
    const headerText = "height";

    const { getByText, getByTestId, container } = render(
      <ValueSlider heading={headerText} />
    );

    const header = getByText(`${headerText}`);

    const sliderContainer = getByTestId(`Slider`);

    expect(header).toBeTruthy();
    expect(sliderContainer.children.length).toEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
