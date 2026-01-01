const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("serves the homepage", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html");
    expect(response.text).toContain("Cebastin Co");
  });
});
