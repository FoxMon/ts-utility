import { describe, it, expect } from "vitest";
import { each, filter } from "../utils/array";
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
    const eachResArray: Array<Type.HashType<string>> = [];
    each(object, (item: string, key) => {
      eachResArray.push({ [key as string]: item });
    });
    expect(eachResArray).toEqual([{ A: "Data-A" }, { B: "Data-B" }]);
  });
  it("Array.filter function test", () => {
    const array: Array<number> = [1, 2, 3, 4];
    const filteredArray: Array<number> = [];
    filter(array, (item: number) => {
      item % 2 === 0 && filteredArray.push(item);
    });
    expect(filteredArray).toEqual([2, 4]);
  });
  it("Object.filter function test", () => {
    const object: Type.HashType<number> = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
    };
    const filteredArray: Array<Type.HashType<number>> = [];
    filter(object, (item: number, key) => {
      item % 2 === 0 && filteredArray.push({ [key]: item });
    });
    expect(filteredArray).toEqual([{ B: 2 }, { D: 4 }]);
  });
});
