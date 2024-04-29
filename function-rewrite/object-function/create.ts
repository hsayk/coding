/**
 * 手写实现 Object.create
 * 静态方法以一个现有对象作为原型，创建一个新对象。
 */
export default function mycreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
