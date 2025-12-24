/** @jest-environment jsdom */
const { TextDecoder, TextEncoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require("fs");
const path = require("path");
const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

describe("Homepage accessibility", () => {
  it("has no detectable axe violations", async () => {
    const html = fs.readFileSync(
      path.join(__dirname, "..", "public", "index.html"),
      "utf8"
    );
    document.documentElement.innerHTML = html;

    const results = await axe(document.documentElement);

    expect(results).toHaveNoViolations();
  });
});
