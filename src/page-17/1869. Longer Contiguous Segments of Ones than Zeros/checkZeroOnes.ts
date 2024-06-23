type CheckZeroOnes = (s: string) => boolean;

/**
 * Accepted
 */
export const checkZeroOnes: CheckZeroOnes = (s) => {
  let [maxOnes, maxZeros] = [0, 0];
  let [currentOnes, currentZeros] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      currentOnes += 1;
      currentZeros = 0; // Reset currentZeros when encountering '1'
    } else {
      currentZeros += 1;
      currentOnes = 0; // Reset currentOnes when encountering '0'
    }

    // Update maxOnes and maxZeros
    maxOnes = Math.max(maxOnes, currentOnes);
    maxZeros = Math.max(maxZeros, currentZeros);
  }

  return maxOnes > maxZeros;
};
