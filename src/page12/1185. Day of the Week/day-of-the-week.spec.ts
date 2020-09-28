import { dayOfTheWeek } from './day-of-the-week';

describe('1185. Day of the Week', () => {
  it('dayOfTheWeek', () => {
    expect(dayOfTheWeek(31, 8, 2019)).toEqual('Saturday');
    expect(dayOfTheWeek(18, 7, 1999)).toEqual('Sunday');
    expect(dayOfTheWeek(15, 8, 1993)).toEqual('Sunday');
  });
});
