import { pow, pow2 } from './pow';

describe('50. Pow(x, n)', () => {
  it('pow', () => {
    expect(pow(2.0, 10)).toEqual(1024);
    expect(pow(2.1, 3)).toEqual(9.261);
    expect(pow(2.0, -2)).toEqual(0.25);
  });

  it('pow2', () => {
    expect(pow2(2.0, 10)).toEqual(1024);
    expect(pow2(2.1, 3)).toEqual(9.261);
    expect(pow2(2.0, -2)).toEqual(0.25);
  });
});
