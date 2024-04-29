/**
 * @summary 手写实现debouns
 * 防抖，频繁多次触发，只执行最后一次的出触发
 */
function mydebounce(fn: () => void, wait: number) {
  let timer = null;

  return function() {
    let context = this;
    let args = arguments;

    if (timer) {
      // 清楚存在的定时器
      clearTimeout(timer);
      timer = null;
    }

    // 重新设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait)
  }
}

export default mydebounce;