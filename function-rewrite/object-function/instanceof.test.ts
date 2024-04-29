import myInstanceof from "./instanceof";
import { expect, test } from "@jest/globals";

test('valid myInstanceof', () => {
  expect(myInstanceof(new String("123"), String)).toBeTruthy();
  expect(myInstanceof("1231", Object)).toBeFalsy();
  expect(myInstanceof({a: "!23"}, Object)).toBeTruthy();
  expect(myInstanceof(function a() {}, Object)).toBeFalsy();
});