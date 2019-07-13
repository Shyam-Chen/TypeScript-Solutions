import { sortArrayByParity, sortArrayByParity2 } from './sort-array-by-parity';

describe('905. Sort Array By Parity', () => {
  it('sortArrayByParity', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });

  it('sortArrayByParity2', () => {
    expect(sortArrayByParity2([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });
});
