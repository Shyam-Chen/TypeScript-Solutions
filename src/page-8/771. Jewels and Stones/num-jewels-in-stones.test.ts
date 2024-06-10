import { numJewelsInStones } from './num-jewels-in-stones';

describe('771. Jewels and Stones', () => {
  test('numJewelsInStones', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
