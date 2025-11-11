import { secondHighest } from './secondHighest';

describe('1796. Second Largest Digit in a String', () => {
  test('secondHighest', () => {
    expect(secondHighest('dfa12321afd')).toBe(2);
    expect(secondHighest('abc1111')).toBe(-1);
  });
});
