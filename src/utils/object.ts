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

/**
 * Clear null or undefined field
 * @param {T extends object} target
 * @returns {T}
 */
export function clearNullable<T extends object>(target: T): T {
  Object.keys(target).forEach((key: string) => {
    // @ts-expect-error
    if (!target[key]) delete target[key];
  });
  return target;
}
