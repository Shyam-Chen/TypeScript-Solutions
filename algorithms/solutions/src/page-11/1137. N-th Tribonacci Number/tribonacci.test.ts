import { tribonacci } from './tribonacci';

describe('1137. N-th Tribonacci Number', () => {
  test('tribonacci', () => {
    expect(tribonacci(4)).toBe(4);
    expect(tribonacci(25)).toBe(1389537);
  });
});
