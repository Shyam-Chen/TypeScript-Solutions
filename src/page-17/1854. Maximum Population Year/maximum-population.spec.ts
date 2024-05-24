import { maximumPopulation } from './maximum-population';

describe('1854. Maximum Population Year', () => {
  it('maximumPopulation', () => {
    expect(
      maximumPopulation([
        [1993, 1999],
        [2000, 2010],
      ]),
    ).toEqual(1993);

    expect(
      maximumPopulation([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981],
      ]),
    ).toEqual(1960);
  });
});
