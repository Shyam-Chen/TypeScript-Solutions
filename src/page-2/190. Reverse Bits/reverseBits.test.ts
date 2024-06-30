import { reverseBits, reverseBits2 } from './reverseBits';

describe('190. Reverse Bits', () => {
  test('reverseBits', () => {
    expect(reverseBits(43261596)).toBe(964176192);
    expect(reverseBits(4294967293)).toBe(3221225471);
  });

  test('reverseBits2', () => {
    expect(reverseBits2(43261596)).toBe(964176192);
    expect(reverseBits2(4294967293)).toBe(3221225471);
  });
});
