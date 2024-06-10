import { satisfiesConditions } from './satisfiesConditions';

describe('3142. Check if Grid Satisfies Conditions', () => {
  test('satisfiesConditions', () => {
    expect(
      satisfiesConditions([
        [1, 0, 2],
        [1, 0, 2],
      ]),
    ).toBe(true);

    expect(
      satisfiesConditions([
        [1, 1, 1],
        [0, 0, 0],
      ]),
    ).toBe(false);

    expect(satisfiesConditions([[1], [2], [3]])).toBe(false);
  });
});
