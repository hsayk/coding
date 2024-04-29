/**
 * @summary 手写实现柯里化函数
 */
export function myCurry(fn: Function) {
  return function curried(...args) {
    // 如果传入的参数个数小于函数的参数个数，继续柯里化
    if (args.length < fn.length) {
      return function () {
        return curried(...args.concat([...arguments]));
      };
    }
    return fn(...args);
  };
}

export function myCurry2(fn: Function) {
  return function curried(...args) {
    // 如果传入的参数个数小于函数的参数个数，继续柯里化
    if (args.length < fn.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  }
}