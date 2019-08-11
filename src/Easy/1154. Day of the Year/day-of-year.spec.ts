import { dayOfYear } from './day-of-year';

describe('1154. Day of the Year', () => {
  it('dayOfYear', () => {
    expect(dayOfYear('2019-01-09')).toEqual(9);
    expect(dayOfYear('2019-02-10')).toEqual(41);
    expect(dayOfYear('2003-03-01')).toEqual(60);
    expect(dayOfYear('2004-03-01')).toEqual(61);
  });
});
