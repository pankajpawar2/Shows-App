const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe('Tests for root route',() => {
  it("Checking for response from backend root route", async done => {
  const response = await request.get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("<h1>Welcome to the Shows App</h1>");
  done();
});
})

describe('Tests for Post route for invalid request body - Bad Request',() => {
  it("Checking for status:400 response", async done => {
  const response = await request.post("/","Invalid data");
  expect(response.status).toBe(400);
  done();
});
})
