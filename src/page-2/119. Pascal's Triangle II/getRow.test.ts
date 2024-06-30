import { getRow } from './getRow';

describe("119. Pascal's Triangle II", () => {
  test('getRow', () => {
    expect(getRow(3)).toStrictEqual([1, 3, 3, 1]);
    expect(getRow(0)).toStrictEqual([1]);
    expect(getRow(1)).toStrictEqual([1, 1]);
  });
});
