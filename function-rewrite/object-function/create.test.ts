import { expect, test } from '@jest/globals';
import mycreate from './create';

test("test create", () => {
  const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };

  const me = mycreate(person);
  expect(me.isHuman).toBeFalsy();
  expect(me.printIntroduction).toBeDefined();
})