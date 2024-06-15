import { bench } from 'vitest';

import {
  thousandSeparator,
  thousandSeparator2,
  thousandSeparator3,
  thousandSeparator4,
} from './thousandSeparator';

describe('1556. Thousand Separator', () => {
  bench('thousandSeparator', () => {
    thousandSeparator(987);
    thousandSeparator(1234);
  });

  // slowest
  bench('thousandSeparator2', () => {
    thousandSeparator2(987);
    thousandSeparator2(1234);
  });

  // fastest
  bench('thousandSeparator3', () => {
    thousandSeparator3(987);
    thousandSeparator3(1234);
  });

  bench('thousandSeparator4', () => {
    thousandSeparator4(987);
    thousandSeparator4(1234);
  });
});
