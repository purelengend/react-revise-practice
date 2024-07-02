import axios, { AxiosError } from "axios";
import MockAdapter from "axios-mock-adapter";
import createHttp from "../http";

// Constants
import { AXIOS_DEFAULT_CONFIG } from "@/constants";

describe("http test cases", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should perform a GET request", async () => {
    const http = createHttp(AXIOS_DEFAULT_CONFIG);

    const data = { message: "success" };

    mock.onGet("/test").reply(200, data);

    const response = await http.get("/test");

    expect(response.data).toEqual(data);
  });

  it("should perform a POST request", async () => {
    const http = createHttp(AXIOS_DEFAULT_CONFIG);

    const requestData = { name: "John Doe" };

    const responseData = { id: 1, name: "John Doe" };

    mock.onPost("/test").reply(201, responseData);

    const response = await http.post("/test", requestData);

    expect(response.data).toEqual(responseData);
  });

  it("should perform a PUT request", async () => {
    const http = createHttp(AXIOS_DEFAULT_CONFIG);

    const requestData = { name: "Jane Doe" };

    const responseData = { id: 1, name: "Jane Doe" };

    mock.onPut("/test").reply(200, responseData);

    const response = await http.put("/test", requestData);

    expect(response.data).toEqual(responseData);
  });

  it("should perform a DELETE request", async () => {
    const http = createHttp(AXIOS_DEFAULT_CONFIG);

    const responseData = { message: "deleted" };

    mock.onDelete("/test").reply(200, responseData);

    const response = await http.delete("/test");

    expect(response.data).toEqual(responseData);
  });

  it("should handle errors", async () => {
    const http = createHttp(AXIOS_DEFAULT_CONFIG);

    mock.onGet("/error").reply(500);

    try {
      await http.get("/error");
    } catch (error) {
      expect((error as AxiosError).response?.status).toBe(500);
    }
  });
});
