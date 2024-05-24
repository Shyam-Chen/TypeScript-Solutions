interface FindPermutationDifference {
  (s: string, t: string): number;
}

/**
 * Accepted
 */
export const findPermutationDifference: FindPermutationDifference = (s, t) => {
  const map = new Map();

  for (let i = 0; i < t.length; i++) {
    map.set(t.charAt(i), i);
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += Math.abs(i - map.get(s.charAt(i)));
  }

  return result;
};
