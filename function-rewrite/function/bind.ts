/**
 * @summary 手写实现bind函数
 */
Function.prototype.mybind = function (context: any) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  const fn = this;
  const args = [...arguments].slice(1);

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
}