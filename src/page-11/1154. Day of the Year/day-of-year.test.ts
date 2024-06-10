import { dayOfYear } from './day-of-year';

describe('1154. Day of the Year', () => {
  test('dayOfYear', () => {
    expect(dayOfYear('2019-01-09')).toBe(9);
    expect(dayOfYear('2019-02-10')).toBe(41);
    expect(dayOfYear('2003-03-01')).toBe(60);
    expect(dayOfYear('2004-03-01')).toBe(61);
  });
});
