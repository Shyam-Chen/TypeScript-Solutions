import { removeElement } from './remove-element';

describe('27. Remove Element', () => {
  it('removeElement', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
