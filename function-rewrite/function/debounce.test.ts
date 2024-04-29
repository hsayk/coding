import { test, expect } from "@jest/globals";
import mydebounce from "./debounce";

test("test debouns", () => {
  expect(mydebounce(() => console.info("debouns 111"), 300));
})