type MinFlips = (a: number, b: number, c: number) => number;

/**
 * Accepted
 */
export const minFlips: MinFlips = (a, b, c) => {
  let flips = 0;

  for (let i = 0; i < 32; i++) {
    // 32 bits to cover 32-bit integers
    const bitA = (a >> i) & 1;
    const bitB = (b >> i) & 1;
    const bitC = (c >> i) & 1;

    if (bitC === 1) {
      // If bitC is 1, at least one of bitA or bitB must be 1
      if (bitA === 0 && bitB === 0) {
        flips += 1;
      }
    } else {
      // If bitC is 0, both bitA and bitB must be 0
      if (bitA === 1) flips += 1;
      if (bitB === 1) flips += 1;
    }
  }

  return flips;
};
