import { test, expect } from '@jest/globals';
import { myCurry, myCurry2 } from './curry';

test("test curry", () => {
  function bar(name: string, age: number) {
    return name + age;
  }
  const curried = myCurry(bar);
  expect(curried("kevin")(18)).toBe("kevin18");
  expect(curried("kevin", 18)).toBe("kevin18");

  const curried2 = myCurry2(bar);
  expect(curried2("kevin")(19)).toBe("kevin19");
  expect(curried2("kevin", 19)).toBe("kevin19");
})