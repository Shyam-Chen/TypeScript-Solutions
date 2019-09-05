import { dietPlanPerformance } from './diet-plan-performance';

describe('1176. Diet Plan Performance', () => {
  it('dietPlanPerformance', () => {
    expect(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3)).toEqual(0);
    expect(dietPlanPerformance([3, 2], 2, 0, 1)).toEqual(1);
    expect(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5)).toEqual(0);
  });
});
