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
  ];

  const found = arabicRomanMap.find(({ arabic }) => nb === arabic)?.roman;

  if (found) {
    return found;
  }

  const subtractables = arabicRomanMap.filter(
    ({ subtractableBy }) => subtractableBy
  );

  for (const subtractable of subtractables) {
    const subtractableByMap = arabicRomanMap.find(
      ({ roman }) => roman === subtractable.subtractableBy
    );

    if (!subtractableByMap) continue;
    if (nb !== subtractable.arabic - subtractableByMap.arabic) continue;

    return subtractableByMap.roman + subtractable.roman;
  }

  const repeatables = arabicRomanMap.filter(({ repeatable }) => repeatable);

  const repeatable = repeatables.find(({ arabic }) => nb <= arabic * 3);

  if (repeatable) {
    let result = "";

    while (nb >= repeatable.arabic) {
      result += repeatable.roman;
      nb -= repeatable.arabic;
    }

    return result;
  }

  return " ";
};
