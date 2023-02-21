/**
 * Add year function
 * @param {Date} target
 * @param {number} value
 * @returns
 */
export function addYear<T extends Date | null>(target: T, value: number): T {
  if (!target) return null as T;
  if (value > Number.MAX_SAFE_INTEGER) return target;
  const added = new Date(target.getTime());
  added.setFullYear(added.getFullYear() + value);
  return added as T;
}

/**
 * Add month function
 * @param {Date} target
 * @param {number} value
 * @returns
 */
export function addMonth<T extends Date | null>(target: T, value: number): T {
  if (!target) return null as T;
  const added = new Date(target.getTime());
  added.setMonth(added.getMonth() + value);
  return added as T;
}
