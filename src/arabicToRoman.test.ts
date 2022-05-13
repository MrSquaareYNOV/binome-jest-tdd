import { arabicToRomain } from "./arabicToRoman";

describe("arabicToRoman", () => {
  it("should return a string", () => {
    expect(typeof arabicToRomain(1)).toBe("string");
  });

  it("should return empty string for 0", () => {
    expect(arabicToRomain(0)).toBe("");
  });

  it("should return empty string for negative number", () => {
    expect(arabicToRomain(-1)).toBe("");
  });

  it("should not return empty string for positive number", () => {
    expect(arabicToRomain(1)).not.toBe("");
  });

  it("should throw error for too high number", () => {
    expect(() => arabicToRomain(4000)).toThrow("Number too high: 4000");
  });

  it("should throw error for too high number", () => {
    expect(() => arabicToRomain(5000)).toThrow("Number too high: 5000");
  });

  it("should return I for 1", () => {
    expect(arabicToRomain(1)).toBe("I");
  });

  it("should return II for 2", () => {
    expect(arabicToRomain(2)).toBe("II");
  });
});
