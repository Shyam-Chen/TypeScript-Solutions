import { getRow } from './get-row';

describe("119. Pascal's Triangle II", () => {
  it('getRow', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
    expect(getRow(0)).toEqual([1]);
    expect(getRow(1)).toEqual([1, 1]);
  });
});
