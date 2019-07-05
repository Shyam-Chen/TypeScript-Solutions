import { numJewelsInStones } from './num-jewels-in-stones';

describe('numJewelsInStones', () => {
  it('numJewelsInStones', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
    expect(numJewelsInStones('z', 'ZZ')).toEqual(0);
  });
});
