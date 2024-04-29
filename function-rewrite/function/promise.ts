enum STATUS {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

/**
 * @summary 手写实现promise
 * Promise/A+规范：https://promisesaplus.com/
 * Promise/A+规范中文版：https://www.ituring.com.cn/article/66566
 * Promise/A+规范英文版：https://promisesaplus.com/
 */
class MyPromise {
  state: STATUS;
  value: any;
  reason: any;
  onFulfilledCallbacks: Function[];
  onRejectedCallbacks: Function[];

  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(this.reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

    return new MyPromise((resolve, reject) => {
      const fulfilledHandler = () => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            this.resolvePromise(newPromise, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      const rejectedHandler = () => {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            this.resolvePromise(newPromise, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      if (this.state === STATUS.FULFILLED) {
        fulfilledHandler();
      } else if (this.state === STATUS.REJECTED) {
        rejectedHandler();
      } else {
        this.onFulfilledCallbacks.push(fulfilledHandler);
        this.onRejectedCallbacks.push(rejectedHandler);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => MyPromise.resolve(onFinally()).then(() => value),
      reason => MyPromise.resolve(onFinally()).then(() => { throw reason; })
    );
  }

  resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
      reject(new TypeError('Chaining cycle detected for promise'));
    }

    if (x instanceof MyPromise) {
      x.then(
        value => this.resolvePromise(promise, value, resolve, reject),
        reason => reject(reason)
      );
    } else {
      resolve(x);
    }
  }

  static resolve(value) {
    return new MyPromise(resolve => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let count = 0;

      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          value => {
            results[i] = value;
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          },
          reason => reject(reason)
        );
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          value => resolve(value),
          reason => reject(reason)
        );
      }
    });
  }
}

