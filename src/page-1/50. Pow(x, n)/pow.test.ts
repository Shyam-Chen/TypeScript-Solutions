import { myPow, myPow2 } from './pow';

describe('50. Pow(x, n)', () => {
  test('myPow', () => {
    expect(myPow(2.0, 10)).toBe(1024);
    expect(myPow(2.1, 3)).toBe(9.261);
    expect(myPow(2.0, -2)).toBe(0.25);
  });

  test('myPow2', () => {
    expect(myPow2(2.0, 10)).toBe(1024);
    expect(myPow2(2.1, 3)).toBe(9.261);
    expect(myPow2(2.0, -2)).toBe(0.25);
  });
});
