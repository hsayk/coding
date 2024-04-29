import { test, expect } from "@jest/globals";
import { myassign } from "./assign";

test("myassign", () => {
  const target = { a: 1 };
  const source1 = { b: 2 };
  const source2 = { c: 3 };

  const result = myassign(target, source1, source2);

  expect(result).toEqual({ a: 1, b: 2, c: 3 });
  expect(target).toEqual({ a: 1, b: 2, c: 3 });
});