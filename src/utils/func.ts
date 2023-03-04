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
