import { bench } from 'vitest';

import { minOperations, minOperations2 } from './minOperations';

describe('1598. Crawler Log Folder', () => {
  bench('minOperations', () => {
    minOperations(['d1/', 'd2/', '../', 'd21/', './']);
    minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']);
    minOperations(['d1/', '../', '../', '../']);
  });

  // fastest
  bench('minOperations2', () => {
    minOperations2(['d1/', 'd2/', '../', 'd21/', './']);
    minOperations2(['d1/', 'd2/', './', 'd3/', '../', 'd31/']);
    minOperations2(['d1/', '../', '../', '../']);
  });
});
