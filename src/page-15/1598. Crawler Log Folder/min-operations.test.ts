import { minOperations, minOperations2 } from './min-operations';

describe('1598. Crawler Log Folder', () => {
  test('minOperations', () => {
    expect(minOperations(['d1/', 'd2/', '../', 'd21/', './'])).toBe(2);
    expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3);
    expect(minOperations(['d1/', '../', '../', '../'])).toBe(0);
  });

  test('minOperations2', () => {
    expect(minOperations2(['d1/', 'd2/', '../', 'd21/', './'])).toBe(2);
    expect(minOperations2(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3);
    expect(minOperations2(['d1/', '../', '../', '../'])).toBe(0);
  });
});
