import { test, expect } from '@jest/globals';
import mynew from './new';

test('test new', () => {
  function bar(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  const obj = mynew(bar, 'kevin', 18);
  expect(obj.name).toBe('kevin');
  expect(obj.age).toBe(18);
});