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
