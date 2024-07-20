import { differenceOfSum } from './differenceOfSum';

describe('2535. Difference Between Element Sum and Digit Sum of an Array', () => {
  test('differenceOfSum', () => {
    expect(differenceOfSum([1, 15, 6, 3])).toBe(9);
    expect(differenceOfSum([1, 2, 3, 4])).toBe(0);
  });
});
