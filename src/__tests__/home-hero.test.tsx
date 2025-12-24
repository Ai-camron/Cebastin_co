import { render, screen } from "@testing-library/react";
import { configureAxe } from "vitest-axe";

import { HomeHero } from "@/components/home-hero";

const axe = configureAxe({
  rules: {
    "color-contrast": { enabled: false },
  },
});

describe("HomeHero", () => {
  it("renders primary call to action", () => {
    render(<HomeHero />);

    expect(
      screen.getByRole("button", { name: /shop the drop/i }),
    ).toBeInTheDocument();
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<HomeHero />);
    const results = await axe(container);

    expect(results.violations).toHaveLength(0);
  });
});
