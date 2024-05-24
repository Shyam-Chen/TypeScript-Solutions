import { secondHighest } from './second-highest';

describe('1796. Second Largest Digit in a String', () => {
  it('secondHighest', () => {
    expect(secondHighest('dfa12321afd')).toEqual(2);
    expect(secondHighest('abc1111')).toEqual(-1);
  });
});
