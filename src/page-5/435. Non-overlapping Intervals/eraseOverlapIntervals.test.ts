import { eraseOverlapIntervals } from './eraseOverlapIntervals';

describe('435. Non-overlapping Intervals', () => {
  test('eraseOverlapIntervals', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ]),
    ).toBe(1);

    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ]),
    ).toBe(2);

    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
      ]),
    ).toBe(0);
  });
});
