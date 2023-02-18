import { describe, it, expect } from "vitest";
import { each } from "../utils/array";
import { Type } from "../types/type";

describe("Test each function in array util", () => {
  it("Array.each function test", () => {
    const array: Array<number> = [1, 2, 3, 4];
    const eachResArray: Array<number> = [];
    each(array, (item: number) => {
      eachResArray.push(item);
    });
    expect(eachResArray).toEqual(array);
  });
  it("Object.each function test", () => {
    const object: Type.HashType<string> = {
      A: "Data-A",
      B: "Data-B",
    };
    // Insert object value
    const eachResArray: Array<string> = [];
    each(object, (item: string) => {
      eachResArray.push(item);
    });
    expect(eachResArray).toEqual(["Data-A", "Data-B"]);
  });
});
