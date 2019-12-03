export const dayOfTheWeek = <T extends number>(day: T, month: T, year: T): string => {
  const weekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekList[new Date(`${year}-${month}-${day}`).getDay()];
};
