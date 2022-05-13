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
});
