import { reverseBits, reverseBits2 } from './reverse-bits';

describe('190. Reverse Bits', () => {
  it('reverseBits', () => {
    expect(reverseBits(43261596)).toEqual(964176192);
    expect(reverseBits(4294967293)).toEqual(3221225471);
  });

  it('reverseBits2', () => {
    expect(reverseBits2(43261596)).toEqual(964176192);
    expect(reverseBits2(4294967293)).toEqual(3221225471);
  });
});
