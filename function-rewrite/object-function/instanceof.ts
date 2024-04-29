/**
 * @summary 手写实现 instanceof
 * instanceof 运算符测试构造函数的 prototype 属性是否出现在对象的原型链
 * 中的任何位置。返回值是一个布尔值。
 * 用法：object instanceof constructor
 */
function myInstanceof(left: any, right: any) {
  console.info(typeof left)
  //基本数据类型直接返回false
  if(typeof left !== 'object' || left === null) return false;

  // Object.getPrototypeOf: 静态方法返回指定对象的原型（即内部 [[Prototype]] 属性的值）
  let leftProto = Object.getPrototypeOf(left);
  // 获取构造函数的 prototype 对象
  const rightPrototype = right.prototype;

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while(true) {
    if(!leftProto) return false;
    if (leftProto === rightPrototype) return true;

    // 获取原型上的原型
    leftProto = Object.getPrototypeOf(leftProto);
  }
}

export default myInstanceof;