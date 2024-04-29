import { test, expect } from "@jest/globals";
import "./call";
test("test call", () => {
  const obj = {
    value: 1
  };
  function bar(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  bar.myCall(obj, "kevin", 18);
  expect(obj.name).toBe("kevin");
  expect(obj.age).toBe(18);
});