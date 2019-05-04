import { reverseBitsS1, reverseBitsS2 } from './reverse-bits';

describe('reverseBits', () => {
  it('reverseBitsS1', () => {
    expect(reverseBitsS1(43261596)).toEqual(964176192);
  });

  it('reverseBitsS2', () => {
    expect(reverseBitsS2(43261596)).toEqual(964176192);
  });
});
