/**
 * @summary 手写实现 new 运算符
 * new 运算符允许开发人员创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。
 */
export default function mynew() {
  let newObject = Object.create(null);
  // 通过Array.prototype.shift.call(arguments)获取构造函数，并将其保存在变量Constructor中。
  let Constructor = Array.prototype.shift.call(arguments);
  let result = null;
  if (typeof Constructor !== "function") {
    throw new TypeError("Type Error");
  }

  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(Constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = Constructor.apply(newObject, [...arguments]);
  // 判断返回对象
  let isFlag = result && (typeof result === "object" || typeof result === "function");
  return isFlag ? result : newObject;
}