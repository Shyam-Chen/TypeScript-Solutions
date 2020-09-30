import { minOperations, minOperations2 } from './min-operations';

describe('1598. Crawler Log Folder', () => {
  it('minOperations', () => {
    expect(minOperations(['d1/', 'd2/', '../', 'd21/', './'])).toEqual(2);
    expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toEqual(3);
    expect(minOperations(['d1/', '../', '../', '../'])).toEqual(0);
  });

  it('minOperations2', () => {
    expect(minOperations2(['d1/', 'd2/', '../', 'd21/', './'])).toEqual(2);
    expect(minOperations2(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toEqual(3);
    expect(minOperations2(['d1/', '../', '../', '../'])).toEqual(0);
  });
});
