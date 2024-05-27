type SecondHighest = (s: string) => number;

export const secondHighest: SecondHighest = (s) => {
  const num = [
    ...new Set(
      Array.from(s)
        .map((i) => Number(i))
        .filter(Boolean)
        .sort((a, b) => b - a),
    ),
  ][1];

  if (num) return num;
  return -1;
};
