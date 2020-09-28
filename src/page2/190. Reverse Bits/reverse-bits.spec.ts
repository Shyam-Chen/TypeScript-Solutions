import { reverseBits, reverseBits2 } from './reverse-bits';

describe('190. Reverse Bits', () => {
  it('reverseBits', () => {
    expect(reverseBits(43261596)).toEqual(964176192);
  });

  it('reverseBits2', () => {
    expect(reverseBits2(43261596)).toEqual(964176192);
  });
});
