import { countMatches } from './count-matches';

describe('1773. Count Items Matching a Rule', () => {
  test('countMatches', () => {
    expect(
      countMatches(
        [
          ['phone', 'blue', 'pixel'],
          ['computer', 'silver', 'lenovo'],
          ['phone', 'gold', 'iphone'],
        ],
        'color',
        'silver',
      ),
    ).toBe(1);

    expect(
      countMatches(
        [
          ['phone', 'blue', 'pixel'],
          ['computer', 'silver', 'phone'],
          ['phone', 'gold', 'iphone'],
        ],
        'type',
        'phone',
      ),
    ).toBe(2);
  });
});
