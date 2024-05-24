import { myPow, myPow2 } from './pow';

describe('50. Pow(x, n)', () => {
  it('myPow', () => {
    expect(myPow(2.0, 10)).toEqual(1024);
    expect(myPow(2.1, 3)).toEqual(9.261);
    expect(myPow(2.0, -2)).toEqual(0.25);
  });

  it('myPow2', () => {
    expect(myPow2(2.0, 10)).toEqual(1024);
    expect(myPow2(2.1, 3)).toEqual(9.261);
    expect(myPow2(2.0, -2)).toEqual(0.25);
  });
});
