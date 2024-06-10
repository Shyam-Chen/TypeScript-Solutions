import { numJewelsInStones } from './numJewelsInStones';

describe('771. Jewels and Stones', () => {
  test('numJewelsInStones', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
