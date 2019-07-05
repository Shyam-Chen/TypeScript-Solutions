import { sortArrayByParityS1, sortArrayByParityS2 } from './sort-array-by-parity';

describe('sortArrayByParity', () => {
  it('sortArrayByParityS1', () => {
    expect(sortArrayByParityS1([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });

  it('sortArrayByParityS2', () => {
    expect(sortArrayByParityS2([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });
});
