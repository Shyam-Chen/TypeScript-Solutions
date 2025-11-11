import { dayOfTheWeek, dayOfTheWeek2 } from './dayOfTheWeek';

describe('1185. Day of the Week', () => {
  test('dayOfTheWeek', () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe('Saturday');
    expect(dayOfTheWeek(18, 7, 1999)).toBe('Sunday');
    expect(dayOfTheWeek(15, 8, 1993)).toBe('Sunday');
  });

  test('dayOfTheWeek2', () => {
    expect(dayOfTheWeek2(31, 8, 2019)).toBe('Saturday');
    expect(dayOfTheWeek2(18, 7, 1999)).toBe('Sunday');
    expect(dayOfTheWeek2(15, 8, 1993)).toBe('Sunday');
  });
});
