import { numJewelsInStones } from './num-jewels-in-stones';

describe('771. Jewels and Stones', () => {
  it('numJewelsInStones', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
    expect(numJewelsInStones('z', 'ZZ')).toEqual(0);
  });
});
