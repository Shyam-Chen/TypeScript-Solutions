import { dayOfTheWeek } from './day-of-the-week';

describe('1185. Day of the Week', () => {
  test('dayOfTheWeek', () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe('Saturday');
    expect(dayOfTheWeek(18, 7, 1999)).toBe('Sunday');
    expect(dayOfTheWeek(15, 8, 1993)).toBe('Sunday');
  });
});
