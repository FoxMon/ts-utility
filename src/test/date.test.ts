import { describe, it, expect } from "vitest";
import {
  addDate,
  addMonth,
  addYear,
  yearDiff,
  monthDiff,
  dateDiff,
} from "../utils/date";

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

  it("Diff year function test", () => {
    const now = new Date();
    const next = addYear(new Date(), 3);
    const diff = yearDiff(now, next);
    const diff2 = yearDiff(next, now);
    expect(diff).toBe(3);
    expect(diff2).toBe(3);
  });

  it("Diff month function test", () => {
    const now = new Date();
    const next = addMonth(new Date(), 3);
    const diff = monthDiff(now, next);
    const diff2 = monthDiff(next, now);
    expect(diff).toBe(3);
    expect(diff2).toBe(3);
  });

  it("Diff date function test", () => {
    const now = new Date();
    const next = addDate(new Date(), 3);
    const diff = dateDiff(now, next);
    const diff2 = dateDiff(next, now);
    expect(diff).toBe(3);
    expect(diff2).toBe(3);
  });
});
