import { maxOperations } from './maxOperations';

describe('1679. Max Number of K-Sum Pairs', () => {
  test('maxOperations', () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
  });
});
