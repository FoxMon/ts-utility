import { isArray, isFunction, isObject } from "./is";
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
 * Each function for array like Array.forEach function
 * This function can be used to object or array
 * @param arr
 * @returns {void}
 */
export function each<T>(
  target: Array<T> | Type.HashType<T>,
  cb: (item: T) => any
): void {
  if (!isFunction(cb)) return;
  match(target)
    .on(
      () => isArray(target) === true,
      () => {
        const arr: Array<T> = target as Array<T>;
        arr.forEach((item: T) => cb(item));
      }
    )
    .on(
      () => isObject(target) === true,
      () => {
        const object: Type.HashType<T> = target as Type.HashType<T>;
        Object.keys(object).forEach((key: string) => {
          cb(object[key]);
        });
      }
    )
    .otherwise((target) => new Error(`The target is not iterable ${target}`));
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
 * Async Array.filter
 * @param arr
 * @param cb callback
 * @returns {Promise<Array<T>>}
 */
export async function asyncFilter<T>(
  arr: Array<T>,
  cb: (item: T) => Promise<boolean>
): Promise<Array<T>> {
  const rtnAsyncArray: Array<T> = [];
  await asyncEach(arr, async (item: T) => {
    const cond: boolean = await cb(item);
    if (cond) rtnAsyncArray.push(item);
  });
  return rtnAsyncArray;
}

/**
 * Async Array.map
 * @param arr
 * @param cb
 * @returns {Promise<Array<T>>}
 */
export async function asyncMap<T>(
  arr: Array<T>,
  cb: (item: T) => Promise<any>
): Promise<Array<T>> {
  const rtnAsyncArray: Array<T> = [];
  await asyncEach(arr, async (item: T) => {
    const cbResult: T = await cb(item);
    rtnAsyncArray.push(cbResult);
  });
  return rtnAsyncArray;
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
