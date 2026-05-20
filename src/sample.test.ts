// 📁 src/sample.test.ts

import { describe, it, expect } from "vitest";

describe("sample test", () => {
  it("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("React", () => {
    expect("React").toBe("React");
  });

  it("boolean", () => {
    expect(true).toBe(true);
  });
});