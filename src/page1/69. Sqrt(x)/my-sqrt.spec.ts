import { mySqrt, mySqrt2 } from './my-sqrt';

describe('69. Sqrt(x)', () => {
  it('mySqrt', () => {
    expect(mySqrt(4)).toEqual(2);
    expect(mySqrt(8)).toEqual(2);
  });

  it('mySqrt2', () => {
    expect(mySqrt2(4)).toEqual(2);
    expect(mySqrt2(8)).toEqual(2);
  });
});
