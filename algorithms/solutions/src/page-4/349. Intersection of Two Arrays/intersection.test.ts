import { intersection } from './intersection';

describe('349. Intersection of Two Arrays', () => {
  test('intersection', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toStrictEqual([2]);

    const sort = (arr: number[]) => arr.sort((a, b) => a - b);
    expect(sort(intersection([4, 9, 5], [9, 4, 9, 8, 4]))).toStrictEqual(sort([9, 4]));
  });
});
