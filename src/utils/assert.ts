import { Type } from "../types/type";

/**
 * assertionError function
 * @param {string | null | undefined} msg
 */
export function assertionError(msg?: string): void {
  throw new Error(msg);
}

/**
 * Assert for type guard
 * @param {boolean} target
 * @param {string} msg
 */
export function assert(target: boolean, msg: string): asserts target {
  if (!target) assertionError(msg);
}

/**
 * Assert function for defined value
 * @param {T} value
 */
export function assertForDefined<T>(
  value: T
): asserts value is Type.NonNullable<T> {
  if (value === null || value === undefined) {
    assertionError(`Expected "value" to be defined, but received ${value}`);
  }
}

/**
 * Assert number
 * @param {unknown} target
 */
export function assertForNumber(target: unknown): asserts target is number {
  if (typeof target !== "number") {
    assertionError("Not a number!");
  }
}

/**
 * Assert string
 * @param {unknown} target
 */
export function assertForString(target: unknown): asserts target is string {
  if (typeof target !== "string") {
    assertionError("Not a string!");
  }
}
