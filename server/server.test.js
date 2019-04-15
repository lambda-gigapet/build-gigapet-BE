const server = require("./server");
const request = require("supertest");
const db = require("../helpers/dbConfig");

describe("Server", () => {
  it("is using the right environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("sends an API running message", async () => {
    const message = `Welcome to the Gigapet API 🐾`;
    const res = await request(server).get("/");
    expect(res.text).toEqual(message);
  });
});
