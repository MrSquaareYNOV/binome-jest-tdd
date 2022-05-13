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

  return " ";
};
