import { decrypt } from './decrypt';

describe('1652. Defuse the Bomb', () => {
  test('decrypt', () => {
    expect(decrypt([5, 7, 1, 4], 3)).toStrictEqual([12, 10, 16, 13]);
    expect(decrypt([1, 2, 3, 4], 0)).toStrictEqual([0, 0, 0, 0]);
    expect(decrypt([2, 4, 9, 3], -2)).toStrictEqual([12, 5, 6, 13]);
  });
});
