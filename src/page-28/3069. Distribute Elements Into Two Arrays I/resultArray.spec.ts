import { resultArray } from './resultArray';

describe('3069. Distribute Elements Into Two Arrays I', () => {
  it('resultArray', () => {
    expect(resultArray([2, 1, 3])).toStrictEqual([2, 3, 1]);
    expect(resultArray([5, 4, 3, 8])).toStrictEqual([5, 3, 4, 8]);
  });
});
