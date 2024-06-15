import { dayOfYear, dayOfYear2 } from './dayOfYear';

describe('1154. Day of the Year', () => {
  test('dayOfYear', () => {
    expect(dayOfYear('2019-01-09')).toBe(9);
    expect(dayOfYear('2019-02-10')).toBe(41);
  });

  test('dayOfYear2', () => {
    expect(dayOfYear2('2019-01-09')).toBe(9);
    expect(dayOfYear2('2019-02-10')).toBe(41);
  });
});
