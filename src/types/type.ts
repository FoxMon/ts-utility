/**
 * Types
 */
export namespace Type {
  /**
   * Create match context
   * @returns {on, otherwise} function
   */
  export interface MatchType<T, V> {
    on: (pred: (v: T) => boolean, fn: (v: T) => V) => MatchType<T, V>;
    otherwise: (fn: (x: T) => V) => V;
  }

  /**
   * Like hashMap type
   */
  export interface HashType<T> {
    [key: string]: T;
  }
}
