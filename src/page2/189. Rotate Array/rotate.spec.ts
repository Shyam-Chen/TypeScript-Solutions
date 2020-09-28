import { rotate, rotate2 } from './rotate';

describe('189. Rotate Array', () => {
  it('rotate', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });

  it('rotate2', () => {
    expect(rotate2([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate2([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });
});
