import { expect, test } from '@jest/globals';
import './bind';

test('test bind', () => {
  const obj = {
    value: 1
  };
  function bar(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  const fn = bar.mybind(obj, 'kevin');
  fn(18);
  expect(obj.name).toBe('kevin');
  expect(obj.age).toBe(18);
});