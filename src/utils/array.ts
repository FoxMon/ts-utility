import { isArray, isFunction, isObject } from "./is";
import { match } from "./func";
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
 * @param {(item: T, key: (string | number))}
 * @returns {void}
 */
export function each<T>(
  target: Array<T> | Type.HashType<T>,
  cb: (item: T, key: string | number) => any
): void {
  if (!isFunction(cb)) return;
  match(target)
    .on(
      () => isArray(target) === true,
      () => {
        const arr: Array<T> = target as Array<T>;
        arr.forEach((item: T, idx: number) => cb(item, idx));
      }
    )
    .on(
      () => isObject(target) === true,
      () => {
        const object: Type.HashType<T> = target as Type.HashType<T>;
        Object.keys(object).forEach((key: string) => {
          cb(object[key], key);
        });
      }
    )
    .otherwise((target) => new Error(`The target is not iterable ${target}`));
}

/**
 * Filter function for array like Array.filter function
 * Filter function can be used to object or array
 * @param target
 * @param {(item: T, key: (string | number))}
 * @returns {Array<T>}
 */
export function filter<T>(
  target: Array<T> | Type.HashType<T>,
  cb: (item: T, key: string | number) => any
): Array<T> {
  const rtnArray: Array<T> = [];
  each(target, (item: T, key: string | number) => {
    const condition: boolean = cb(item, key);
    condition && rtnArray.push(item);
  });
  return rtnArray;
}

/**
 * Keys function for object or array
 * Like Object.keys() function
 * @param target
 * @returns {Array<string>}
 */
export function keys<T>(target: Array<T> | Type.HashType<T>): Array<string> {
  if (isObject(target)) return Object.keys(target);
  const array: Array<T> = target as Array<T>;
  const rtnArray: Array<string> = array.map((_: T, idx: number) =>
    idx.toString()
  );
  return rtnArray.length === 0 ? [] : rtnArray;
}

/**
 * Values function for object or array
 * Like Object.values() function
 * @param target
 * @returns {Array<T>}
 */
export function values<T>(target: Array<T> | Type.HashType<T>): Array<T> {
  if (isArray(target)) return (target as Array<T>) || [];
  return Object.values(target) || [];
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
