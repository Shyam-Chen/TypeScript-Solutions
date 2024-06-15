type DayOfTheWeek = (day: number, month: number, year: number) => string;

/**
 * Accepted
 */
export const dayOfTheWeek: DayOfTheWeek = (day, month, year) => {
  const weekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekList[new Date(`${year}-${month}-${day}`).getDay()];
};

/**
 * Accepted
 */
export const dayOfTheWeek2: DayOfTheWeek = (day, month, year) => {
  const weekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Array with days in each month for a non-leap year
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Check if the year is a leap year
  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Number of days from reference day (Jan 1, 1971 which was a Friday)
  let daysPassed = 0;

  // Calculate days passed from 1971 to the start of given year
  for (let y = 1971; y < year; y++) {
    daysPassed += isLeapYear(y) ? 366 : 365;
  }

  // Calculate days passed in the current year up to the given month
  for (let m = 0; m < month - 1; m++) {
    daysPassed += daysInMonths[m];
  }

  // Add days in the current month
  daysPassed += day - 1;

  // Adjust for leap year if current year is leap and after February
  if (month > 2 && isLeapYear(year)) daysPassed += 1;

  // Calculate day of the week using reference day and days passed
  const dayIndex = (daysPassed + 5) % 7; // January 1, 1971 was a Friday, so 5 is offset
  if (dayIndex < 0) return weekList[dayIndex + 7];
  return weekList[dayIndex];
};
