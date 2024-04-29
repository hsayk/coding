/**
 * @summary 手写实现call函数
 */
Function.prototype.myCall = function (context: any) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  context = context || window;
  context.fn = this;

  const args = [...arguments].slice(1);
  const result = context.fn(...args);

  delete context.fn;
  return result;
}