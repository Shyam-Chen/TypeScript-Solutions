import { transpose } from './transpose-matrix';

describe('867. Transpose Matrix', () => {
  it('transpose', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
  });
});
