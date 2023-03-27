import { Type } from "../types/type";

/**
 * Create matched context
 * @param v
 * @returns {on, otherwise}
 */
export function matched<T>(v: T) {
  return {
    on: () => matched(v),
    otherwise: () => v,
  };
}

/**
 * Create match context
 *
 * example
 *
 * match(0)
 *  .on((x) => x < 0, () => 0)
 *  .on((x) => x >= 0 && x < 1), () => 1)
 *  .otherwise((x) => x * 10);
 *
 * @param v
 * @returns {on, otherwise}
 */
export function match<T, V>(v: T): Type.MatchType<T, V> {
  return {
    on: (predict: (v: T) => boolean, fn: (v: T) => V) =>
      predict(v) ? matched(fn(v)) : match(v),
    otherwise: (fn: (x: T) => V) => fn(v),
  };
}

/**
 * Size of array or object
 * @param {any} value
 * @returns {number}
 */
export function size(value: any): number {
  return Array.isArray(value)
    ? value.length
    : value && typeof value === "object"
    ? value.size || value.length || Object.keys(value).length
    : typeof value === "string"
    ? new Blob([value]).size
    : 0;
}

/**
 * Throttle
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
export function throttle(func: Function, wait: number = 250) {
  let isThrottle: boolean;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastTime: number;
  return function (this: any) {
    const ctx = this;
    const args = arguments;
    if (!isThrottle) {
      func.apply(ctx, args);
      lastTime = Date.now();
      isThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        const nowTime = Date.now();
        if (nowTime - lastTime >= wait) {
          func.apply(ctx, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
}
