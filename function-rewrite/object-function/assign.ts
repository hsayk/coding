/**
 * @summary 手写实现Object.assign函数
 * Object.assign() 静态方法将一个或者多个源对象中所有可枚举的
 * 自有属性复制到目标对象，并返回修改后的目标对象。
 */
export function myassign(target: any, ...args: any[]) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /*
   * 这行代码的作用是确保 target 参数是一个对象。
   * 有时候，target 可能是一个原始类型值（比如 null 或 undefined），
   * 而不是一个对象。通过使用 Object() 构造函数，
   * 无论 target 是什么类型，都会将其转换为对象。
   * 这样做的好处是确保后续代码可以安全地操作这个对象，
   * 而不会因为 target 是原始类型而出现错误。 
   */
  const to = Object(target);

  for (let index = 0; index < args.length; index++) {
    const nextSource = args[index];

    if (nextSource != null) {
      for (const nextKey in nextSource) {
        /*
         * 检查给定的对象 (item) 是否具有指定名称 (key) 的属性，
         * 并且这个属性是对象本身拥有的，而不是继承自原型链上的。 
         */
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }

  return to;
}