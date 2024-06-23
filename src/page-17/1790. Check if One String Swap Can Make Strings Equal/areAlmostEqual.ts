type AreAlmostEqual = (s1: string, s2: string) => boolean;

/**
 * Accepted
 */
export const areAlmostEqual: AreAlmostEqual = (s1, s2) => {
  // If the strings are already equal, no swap is needed
  if (s1 === s2) return true;

  // Collect the indices where the characters differ
  const diffIndices: number[] = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diffIndices.push(i);
  }

  // There must be exactly two differences to make a single swap effective
  if (diffIndices.length !== 2) return false;

  // Get the indices of the differences
  const [i, j] = diffIndices;

  // Check if swapping the differing characters would make the strings equal
  return s1[i] === s2[j] && s1[j] === s2[i];
};
