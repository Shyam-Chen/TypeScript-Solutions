import { countBits } from './count-bits';

describe('338. Counting Bits', () => {
  it('countBits', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
