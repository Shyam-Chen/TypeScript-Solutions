import { countBits } from './count-bits';

describe('addDigits', () => {
  it('countBits', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
