interface ReverseBits {
  (n: number): number;
}

/**
 * Accepted
 */
export const reverseBits: ReverseBits = (n) => {
  return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);
};

/**
 * Accepted
 */
export const reverseBits2: ReverseBits = (n) => {
  let x = BigInt(n);

  x = ((x & 0xaaaaaaaan) >> 1n) | ((x & 0x55555555n) << 1n);
  x = ((x & 0xccccccccn) >> 2n) | ((x & 0x33333333n) << 2n);
  x = ((x & 0xf0f0f0f0n) >> 4n) | ((x & 0x0f0f0f0fn) << 4n);
  x = ((x & 0xff00ff00n) >> 8n) | ((x & 0x00ff00ffn) << 8n);
  x = ((x >> 16n) | (x << 16n)) & 0xffffffffn;

  return Number(x.toString());
};
