import React from "react";
import { render, cleanup } from "@testing-library/react";

import Footer from "./Footer";

describe("<Footer />", () => {
  afterAll(cleanup);

  const linkedIn_URL = "https://www.linkedin.com/in/anna-senchikhina/";

  const { getByText, container } = render(<Footer />);

  const createdBy = getByText("Created by");
  const linkedInLink = getByText("Anna Senchikhina");

  test("Should display correct text", () => {
    expect(createdBy).toBeTruthy();
  });

  test("Should have correct link", () => {
    expect(linkedInLink.href).toContain(linkedIn_URL);
  });

  test("Should match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
