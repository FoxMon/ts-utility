import { describe, it, expect } from "vitest";
import { each } from "../utils/array";

describe("Test each function in array util", () => {
  it("Each function ok", () => {
    const array: Array<number> = [1, 2, 3, 4];
    const eachResArray: Array<number> = [];
    each(array, (item: number) => {
      eachResArray.push(item);
    });
    expect(eachResArray).toEqual(array);
  });
});
