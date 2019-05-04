import { romanToInt } from './roman-to-int';

describe('romanToInt', () => {
  it('romanToInt', () => {
    expect(romanToInt('III')).toEqual(3);
    expect(romanToInt('IV')).toEqual(4);
    expect(romanToInt('IX')).toEqual(9);
    expect(romanToInt('LVIII')).toEqual(58);
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });
});
