import { mySqrt, mySqrt2 } from './my-sqrt';

describe('69. Sqrt(x)', () => {
  test('mySqrt', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
  });

  test('mySqrt2', () => {
    expect(mySqrt2(4)).toBe(2);
    expect(mySqrt2(8)).toBe(2);
  });
});
