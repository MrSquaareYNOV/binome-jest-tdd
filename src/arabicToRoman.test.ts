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

  it("should return III for 3", () => {
    expect(arabicToRomain(3)).toBe("III");
  });

  it("should return V for 5", () => {
    expect(arabicToRomain(5)).toBe("V");
  });

  it("should return X for 10", () => {
    expect(arabicToRomain(10)).toBe("X");
  });

  it("should return L for 50", () => {
    expect(arabicToRomain(50)).toBe("L");
  });

  it("should return C for 100", () => {
    expect(arabicToRomain(100)).toBe("C");
  });

  it("should return D for 500", () => {
    expect(arabicToRomain(500)).toBe("D");
  });

  it("should return M for 1000", () => {
    expect(arabicToRomain(1000)).toBe("M");
  });

  it("should return IV for 4", () => {
    expect(arabicToRomain(4)).toBe("IV");
  });

  it("should return XL for 40", () => {
    expect(arabicToRomain(40)).toBe("XL");
  });

  it("should return XX for 20", () => {
    expect(arabicToRomain(20)).toBe("XX");
  });

  it("should return XXX for 30", () => {
    expect(arabicToRomain(30)).toBe("XXX");
  });

  it("should return CC for 200", () => {
    expect(arabicToRomain(200)).toBe("CC");
  });

  it("should return CCC for 300", () => {
    expect(arabicToRomain(300)).toBe("CCC");
  });

  it("should return CD for 400", () => {
    expect(arabicToRomain(400)).toBe("CD");
  });

  it("should return CM for 900", () => {
    expect(arabicToRomain(900)).toBe("CM");
  });

  it("should return MM for 2000", () => {
    expect(arabicToRomain(2000)).toBe("MM");
  });

  it("should return MMM for 3000", () => {
    expect(arabicToRomain(3000)).toBe("MMM");
  });

  it("should return MCMIII for 1903", () => {
    expect(arabicToRomain(1903)).toBe("MCMIII");
  });
});
