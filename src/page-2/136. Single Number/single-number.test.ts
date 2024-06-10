import { singleNumber } from './single-number';

describe('136. Single Number', () => {
  test('singleNumber', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    expect(singleNumber([1])).toBe(1);
  });
});
