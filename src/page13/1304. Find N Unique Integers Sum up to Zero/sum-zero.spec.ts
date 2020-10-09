import { sumZero } from './sum-zero';

describe('1304. Find N Unique Integers Sum up to Zero', () => {
  it('sumZero', () => {
    expect(sumZero(5).reduce((acc, cur) => acc + cur)).toEqual(0);
    expect(sumZero(3).reduce((acc, cur) => acc + cur)).toEqual(0);
    expect(sumZero(1).reduce((acc, cur) => acc + cur)).toEqual(0);
  });
});
