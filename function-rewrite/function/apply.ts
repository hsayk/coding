/**
 * @summary 手写实现apply函数
 */
Function.prototype.myapply = function (context: any) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  context = context || window;
  context.fn = this;

  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
}