type DayOfYear = (date: string) => number;

/**
 * Accepted
 */
export const dayOfYear: DayOfYear = (date) => {
  const target = new Date(date);
  const start = new Date(target.getFullYear(), 0, 0);
  const diff = target.getTime() - start.getTime();
  return Math.floor(diff / (24 * 60 * 60 * 1000));
};

/**
 * Accepted
 */
export const dayOfYear2: DayOfYear = (date) => {
  const [yearStr, monthStr, dayStr] = date.split('-');
  const [year, month, day] = [Number(yearStr), Number(monthStr), Number(dayStr)];

  // Array with days in each month for a non-leap year
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Check if the year is a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // If it's a leap year, February has 29 days
  if (isLeapYear) daysInMonth[1] = 29;

  // Calculate the day of year
  let dayOfYear = day;

  for (let i = 0; i < month - 1; i++) {
    dayOfYear += daysInMonth[i];
  }

  return dayOfYear;
};
