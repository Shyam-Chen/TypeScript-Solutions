import { getMinDistance } from './get-min-distance';

describe('1848. Minimum Distance to the Target Element', () => {
  it('getMinDistance', () => {
    expect(getMinDistance([1, 2, 3, 4, 5], 5, 3)).toEqual(1);
    expect(getMinDistance([1], 1, 0)).toEqual(0);
    expect(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)).toEqual(0);
  });
});
