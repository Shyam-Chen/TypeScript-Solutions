import { countMatches } from './count-matches';

describe('1773. Count Items Matching a Rule', () => {
  it('countMatches', () => {
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
    ).toEqual(1);

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
    ).toEqual(2);
  });
});
