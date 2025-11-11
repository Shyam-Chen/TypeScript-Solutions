import { sortArrayByParity, sortArrayByParity2 } from './sortArrayByParity';

describe('905. Sort Array By Parity', () => {
  test('sortArrayByParity', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toStrictEqual([2, 4, 3, 1]);
    expect(sortArrayByParity([0])).toStrictEqual([0]);
  });

  test('sortArrayByParity2', () => {
    expect(sortArrayByParity2([3, 1, 2, 4])).toStrictEqual([2, 4, 3, 1]);
    expect(sortArrayByParity2([0])).toStrictEqual([0]);
  });
});
