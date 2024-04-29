/**
 * @summary 手写实现节流函数
 * throttle: 一个时间段内函数只被执行一次
 */
function mythrottle(fn: () => void, delay: number) {
  let currTime = Date.now();
  
  return function() {
    let context = this;
    let args = arguments;

    if (Date.now() - currTime >= delay) {
      currTime = Date.now();
      return fn.apply(context, args);
    }
  }
}