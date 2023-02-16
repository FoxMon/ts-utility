/**
 * Check object
 * @param target
 * @returns {boolean}
 */
export function isObject(target: unknown): boolean {
  return Object.prototype.toString.call(target) === "[object Object]";
}

/**
 * Check array
 * @param target
 * @returns {boolean}
 */
export function isArray(target: unknown): boolean {
  return Array.isArray(target);
}

/**
 * Check boolean
 * @param target
 * @returns {boolean}
 */
export function isBoolean(target: unknown): boolean {
  return typeof target === "boolean" ? true : false;
}

/**
 * Check undefined
 * @param target
 * @returns {boolean}
 */
export function inUndefined(target: unknown): boolean {
  return target === "undefined";
}
