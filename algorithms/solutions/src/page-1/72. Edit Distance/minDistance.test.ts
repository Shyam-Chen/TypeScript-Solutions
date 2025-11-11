import { minDistance } from './minDistance';

describe('72. Edit Distance', () => {
  test('minDistance', () => {
    expect(minDistance('horse', 'ros')).toBe(3);
    expect(minDistance('intention', 'execution')).toBe(5);
  });
});
