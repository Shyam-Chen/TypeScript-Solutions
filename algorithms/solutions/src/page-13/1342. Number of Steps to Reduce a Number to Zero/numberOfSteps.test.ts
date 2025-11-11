import { numberOfSteps } from './numberOfSteps';

describe('1342. Number of Steps to Reduce a Number to Zero', () => {
  test('numberOfSteps', () => {
    expect(numberOfSteps(14)).toBe(6);
    expect(numberOfSteps(8)).toBe(4);
    expect(numberOfSteps(123)).toBe(12);
  });
});
