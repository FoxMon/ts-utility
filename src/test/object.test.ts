import { describe, it, expect } from "vitest";
import { deepClone } from "../utils/object";

describe("Object function test", () => {
  it("deepClone function", () => {
    const original = { a: 1, b: { c: "Original" } };
    const cloneObject = deepClone(original);
    cloneObject.a = 2;
    expect(original).toEqual({ a: 1, b: { c: "Original" } });
    expect(cloneObject).toEqual({ a: 2, b: { c: "Original" } });
    const notObj = "a";
    const clone = deepClone(notObj);
    expect(clone).toEqual("a");
  });
});
