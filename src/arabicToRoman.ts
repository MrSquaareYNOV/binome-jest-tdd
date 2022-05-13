export const arabicToRomain = (nb: number): string => {
  if (nb > 3999) {
    throw new Error("Number too high: " + nb);
  }

  if (nb <= 0) {
    return "";
  }

  const arabicRomanMap = [
    { arabic: 1, roman: "I", repeatable: true },
    { arabic: 5, roman: "V", subtractableBy: "I" },
    { arabic: 10, roman: "X", repeatable: true, subtractableBy: "I" },
    { arabic: 50, roman: "L", subtractableBy: "X" },
    { arabic: 100, roman: "C", repeatable: true, subtractableBy: "X" },
    { arabic: 500, roman: "D", subtractableBy: "C" },
    { arabic: 1000, roman: "M", repeatable: true, subtractableBy: "C" },
  ].reverse();

  for (const arabicRoman of arabicRomanMap) {
    if (nb >= arabicRoman.arabic) {
      return arabicRoman.roman + arabicToRomain(nb - arabicRoman.arabic);
    }

    if (arabicRoman.subtractableBy) {
      const subtractableBy = arabicRomanMap.find(
        (item) => item.roman === arabicRoman.subtractableBy
      );

      if (subtractableBy && nb >= arabicRoman.arabic - subtractableBy.arabic) {
        return (
          subtractableBy.roman +
          arabicRoman.roman +
          arabicToRomain(nb - (arabicRoman.arabic - subtractableBy.arabic))
        );
      }
    }

    if (arabicRoman.repeatable) {
      if (nb >= arabicRoman.arabic * 2) {
        return (
          arabicRoman.roman +
          arabicRoman.roman +
          arabicToRomain(nb - arabicRoman.arabic * 2)
        );
      }

      if (nb >= arabicRoman.arabic * 3) {
        return (
          arabicRoman.roman +
          arabicRoman.roman +
          arabicRoman.roman +
          arabicToRomain(nb - arabicRoman.arabic * 3)
        );
      }
    }
  }

  return "";
};
