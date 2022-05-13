export const arabicToRomain = (nb: number): string => {
  if (nb > 3999) {
    throw new Error("Number too high: " + nb);
  }

  if (nb <= 0) {
    return "";
  }

  const arabicRomanMap = [
    { arabic: 1, roman: "I" },
    { arabic: 2, roman: "II" },
    { arabic: 3, roman: "III" },
    { arabic: 5, roman: "V" },
    { arabic: 10, roman: "X" },
    { arabic: 50, roman: "L" },
    { arabic: 100, roman: "C" },
    { arabic: 500, roman: "D" },
    { arabic: 1000, roman: "M" },
  ];

  const found = arabicRomanMap.find(({ arabic }) => nb === arabic)?.roman;

  if (found) {
    return found;
  }

  if (nb + arabicRomanMap[0].arabic === arabicRomanMap[3].arabic) {
    return arabicRomanMap[0].roman + arabicRomanMap[3].roman;
  }

  return " ";
};
