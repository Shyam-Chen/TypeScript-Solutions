import { minCostClimbingStairs } from './minCostClimbingStairs';

describe('746. Min Cost Climbing Stairs', () => {
  test('minCostClimbingStairs', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
