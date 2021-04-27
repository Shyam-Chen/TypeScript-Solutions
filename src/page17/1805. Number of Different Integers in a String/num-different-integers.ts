interface NumDifferentIntegers {
  (word: string): number;
}

export const numDifferentIntegers: NumDifferentIntegers = (word) => {
  return [
    ...new Set(
      word
        .replace(/[a-z]/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map((val) => val.replace(/^0+/, '')),
    ),
  ].length;
};
