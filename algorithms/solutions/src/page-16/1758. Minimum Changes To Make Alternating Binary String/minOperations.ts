type MinOperations = (s: string) => number;

/**
 * Accepted
 */
export const minOperations: MinOperations = (s) => {
  let countPattern1 = 0; // Count for pattern '010101...'
  let countPattern2 = 0; // Count for pattern '101010...'

  for (let i = 0; i < s.length; i++) {
    // Character expected in pattern 1
    const expectedCharPattern1 = i % 2 === 0 ? '0' : '1';
    if (s[i] !== expectedCharPattern1) countPattern1 += 1;

    // Character expected in pattern 2
    const expectedCharPattern2 = i % 2 === 0 ? '1' : '0';
    if (s[i] !== expectedCharPattern2) countPattern2 += 1;
  }

  return Math.min(countPattern1, countPattern2);
};
