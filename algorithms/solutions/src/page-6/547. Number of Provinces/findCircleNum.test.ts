import { findCircleNum } from './findCircleNum';

describe('547. Number of Provinces', () => {
  test('findCircleNum', () => {
    expect(
      findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(2);

    expect(
      findCircleNum([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(3);
  });
});
