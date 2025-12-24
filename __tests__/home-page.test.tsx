import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import HomePage from "../app/page";

describe("HomePage", () => {
  it("renders key ecommerce sections", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /luxury streetwear/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop the drop/i })).toHaveAttribute(
      "href",
      "/shop",
    );
    expect(screen.getByRole("heading", { name: /find your lane/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /short notes/i })).toBeInTheDocument();
  });

  it("includes accessible newsletter form controls", () => {
    render(<HomePage />);

    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email");
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
