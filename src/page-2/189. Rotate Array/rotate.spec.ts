import { rotate } from './rotate';

describe('189. Rotate Array', () => {
  it('rotate', () => {
    const case1 = [1, 2, 3, 4, 5, 6, 7];
    rotate(case1, 3);
    expect(case1).toEqual([5, 6, 7, 1, 2, 3, 4]);

    const case2 = [-1, -100, 3, 99];
    rotate(case2, 2);
    expect(case2).toEqual([3, 99, -1, -100]);
  });
});
