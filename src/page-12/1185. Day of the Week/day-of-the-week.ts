type DayOfTheWeek = (day: number, month: number, year: number) => string;

export const dayOfTheWeek: DayOfTheWeek = (day, month, year) => {
  const weekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekList[new Date(`${year}-${month}-${day}`).getDay()];
};
