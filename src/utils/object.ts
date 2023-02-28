import { isObject } from "./is";

/**
 * Check key in object
 * @param {T} object
 * @param {keyof T} key
 * @returns {boolean}
 */
export function keyCheck<T extends object>(
  object: T,
  key: any
): key is keyof T {
  return key in object;
}

/**
 * Deep clone object
 * @param target
 * @returns {cloneObject}
 */
export function deepClone(target: any) {
  if (!target || !isObject(target)) return target;
  const clone: { [key: string]: any } = {};
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      clone[key] = deepClone(target[key]);
    }
  }
  return clone;
}
