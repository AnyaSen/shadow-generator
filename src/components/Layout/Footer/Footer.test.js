import React from "react";
import { render, cleanup } from "@testing-library/react";

import Footer from "./Footer";

describe("<Footer />", () => {
  afterAll(cleanup);

  const portfolio_URL = "https://portfolio-anna-senchikhina.netlify.com/";

  const { getByText, container } = render(<Footer />);

  const createdBy = getByText("Created by");
  const portfolioLink = getByText("Anna Senchikhina");

  test("Should display correct text", () => {
    expect(createdBy).toBeTruthy();
  });

  test("Should have correct link", () => {
    expect(portfolioLink.href).toContain(portfolio_URL);
  });

  test("Should match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
