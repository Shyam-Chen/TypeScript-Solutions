import { maximumPopulation } from './maximumPopulation';

describe('1854. Maximum Population Year', () => {
  test('maximumPopulation', () => {
    expect(
      maximumPopulation([
        [1993, 1999],
        [2000, 2010],
      ]),
    ).toBe(1993);

    expect(
      maximumPopulation([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981],
      ]),
    ).toBe(1960);
  });
});
