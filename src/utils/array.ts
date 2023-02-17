import { Type } from "../types/type";

/**
 * Remove duplicate
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
export function removeDuplicate<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  return arr1.filter((value: T, idx: number) => arr2.indexOf(value) === idx);
}

/**
 * Async Array.forEach
 * @param arr
 * @param cb callback
 */
export async function asyncEach<T>(
  arr: Array<T>,
  cb: (item: T) => Promise<any>
): Promise<void> {
  const indexes: Array<number> = Array.from({ length: arr.length })
    .fill(0)
    .map((_, idx: number) => idx);
  for (const index of indexes) {
    await cb(arr[index]);
  }
}

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
