import { describe, it, expect } from "vitest";
import { addDate, addMonth, addYear } from "../utils/date";

describe("Date util test", () => {
  it("Add year function test", () => {
    const now = new Date();
    const res = addYear(now, 3);
    expect(res.getFullYear()).toEqual(now.getFullYear() + 3);
  });
  it("Add month function test", () => {
    const now = new Date();
    const res = addMonth(now, 1);
    expect(now.getMonth() + 1).toEqual(res.getMonth());
  });
  it("Add date function test", () => {
    const now = new Date();
    const res = addDate(now, 13);
    const addedNow = new Date(now.getTime());
    addedNow.setDate(addedNow.getDate() + 13);
    expect(addedNow.getDate()).toEqual(res.getDate());
  });
});
