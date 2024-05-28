type FindPermutationDifference = (s: string, t: string) => number;

/**
 * Accepted
 */
export const findPermutationDifference: FindPermutationDifference = (s, t) => {
  const map = new Map<string, number>();

  for (let i = 0; i < t.length; i++) {
    map.set(t.charAt(i), i);
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = map.get(s.charAt(i));

    if (typeof cur === 'number') {
      result += Math.abs(i - cur);
    }
  }

  return result;
};
