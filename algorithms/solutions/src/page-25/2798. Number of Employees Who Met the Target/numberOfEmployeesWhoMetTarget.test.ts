import { numberOfEmployeesWhoMetTarget } from './numberOfEmployeesWhoMetTarget';

describe('2798. Number of Employees Who Met the Target', () => {
  test('numberOfEmployeesWhoMetTarget', () => {
    expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)).toBe(3);
    expect(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)).toBe(0);
  });
});
