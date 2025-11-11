import { uniquePaths } from './uniquePaths';

describe('62. Unique Paths', () => {
  test('uniquePaths', () => {
    expect(uniquePaths(3, 7)).toBe(28);
    expect(uniquePaths(3, 2)).toBe(3);
  });
});
