import { getRow } from './triangle-row';

describe("119. Pascal's Triangle II", () => {
  it('getRow', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });
});
