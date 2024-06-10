import { countBits } from './count-bits';

describe('338. Counting Bits', () => {
  test('countBits', () => {
    expect(countBits(2)).toStrictEqual([0, 1, 1]);
    expect(countBits(5)).toStrictEqual([0, 1, 1, 2, 1, 2]);
  });
});
