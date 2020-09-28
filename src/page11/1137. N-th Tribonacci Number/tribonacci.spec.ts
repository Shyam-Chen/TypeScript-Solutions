import { tribonacci } from './tribonacci';

describe('1137. N-th Tribonacci Number', () => {
  it('tribonacci', () => {
    expect(tribonacci(4)).toEqual(4);
    expect(tribonacci(25)).toEqual(1389537);
  });
});
