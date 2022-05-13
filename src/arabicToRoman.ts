export const arabicToRomain = (nb: number): string => {
  if (nb > 3999) {
    throw new Error("Number too high: " + nb);
  }

  if (nb === 0) {
    return "";
  }

  if (nb < 0) {
    return "";
  }

  if (nb === 1) {
    return "I";
  }

  if (nb === 2) {
    return "II";
  }

  if (nb === 3) {
    return "III";
  }

  if (nb === 5) {
    return "V";
  }

  if (nb === 10) {
    return "X";
  }

  return " ";
};
