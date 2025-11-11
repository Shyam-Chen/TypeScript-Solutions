type numberOfEmployeesWhoMetTarget = (hours: number[], target: number) => number;

/**
 * Accepted
 */
export const numberOfEmployeesWhoMetTarget: numberOfEmployeesWhoMetTarget = (hours, target) => {
  return hours.filter((hour) => hour >= target).length;
};
