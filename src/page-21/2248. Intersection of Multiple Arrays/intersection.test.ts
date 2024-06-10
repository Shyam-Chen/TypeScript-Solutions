import { intersection, intersection2 } from './intersection';

describe('2248. Intersection of Multiple Arrays', () => {
  test('intersection', () => {
    expect(
      intersection([
        [3, 1, 2, 4, 5],
        [1, 2, 3, 4],
        [3, 4, 5, 6],
      ]),
    ).toStrictEqual([3, 4]);

    expect(
      intersection([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toStrictEqual([]);
  });

  test('intersection2', () => {
    expect(
      intersection2([
        [3, 1, 2, 4, 5],
        [1, 2, 3, 4],
        [3, 4, 5, 6],
      ]),
    ).toStrictEqual([3, 4]);

    expect(
      intersection2([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toStrictEqual([]);
  });
});
