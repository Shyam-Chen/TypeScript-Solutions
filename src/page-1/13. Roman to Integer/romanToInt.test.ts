import { romanToInt } from './romanToInt';

describe('13. Roman to Integer', () => {
  test('romanToInt', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
