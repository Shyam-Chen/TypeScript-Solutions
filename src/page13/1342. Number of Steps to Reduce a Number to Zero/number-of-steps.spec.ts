import { numberOfSteps } from './number-of-steps';

describe('1342. Number of Steps to Reduce a Number to Zero', () => {
  it('numberOfSteps', () => {
    expect(numberOfSteps(14)).toEqual(6);
    expect(numberOfSteps(8)).toEqual(4);
    expect(numberOfSteps(123)).toEqual(12);
  });
});
