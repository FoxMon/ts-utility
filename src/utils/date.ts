/**
 * Add year function
 * @param {Date} target
 * @param {number} value
 * @returns {Date | null}
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
 * @returns {Date | null}
 */
export function addMonth<T extends Date | null>(target: T, value: number): T {
  if (!target) return null as T;
  const added = new Date(target.getTime());
  added.setMonth(added.getMonth() + value);
  return added as T;
}

/**
 * Add date function
 * @param {Date} target
 * @param {number} value
 * @returns {Date | null}
 */
export function addDate<T extends Date | null>(target: T, value: number): T {
  if (!target) return null as T;
  const added = new Date(target.getTime());
  added.setDate(added.getDate() + value);
  return added as T;
}

/**
 * Year diff function
 * @param {Date} target1
 * @param {Date} target2
 * @returns {number | null}
 */
export function yearDiff(target1: Date, target2: Date): number | null {
  if (!target1 || !target2) return null;
  const t1Year: number = target1.getFullYear();
  const t2Year: number = target2.getFullYear();
  return t1Year >= t2Year ? t1Year - t2Year : t2Year - t1Year;
}

/**
 * Month diff function
 * @param {Date} target1
 * @param {Date} target2
 * @returns {number | null}
 */
export function monthDiff(target1: Date, target2: Date): number | null {
  if (!target1 || !target2) return null;
  const t1Month: number = target1.getMonth();
  const t2Month: number = target2.getMonth();
  return t1Month >= t2Month ? t1Month - t2Month : t2Month - t1Month;
}

/**
 * Date diff function
 * @param {Date} target1
 * @param {Date} target2
 * @returns {number | null}
 */
export function dateDiff(target1: Date, target2: Date): number | null {
  if (!target1 || !target2) return null;
  const t1Date: number = target1.getDate();
  const t2Date: number = target2.getDate();
  return t1Date >= t2Date ? t1Date - t2Date : t2Date - t1Date;
}
