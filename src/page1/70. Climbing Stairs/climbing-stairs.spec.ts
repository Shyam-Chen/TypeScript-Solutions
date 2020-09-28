import { climbStairs, climbStairs2 } from './climbing-stairs';

describe('70. Climbing Stairs', () => {
  it('climbStairs', () => {
    expect(climbStairs(2)).toEqual(2);
    expect(climbStairs(3)).toEqual(3);
  });

  it('climbStairs2', () => {
    expect(climbStairs2(2)).toEqual(2);
    expect(climbStairs2(3)).toEqual(3);
  });
});
