import { minimumChairs } from './minimumChairs';

describe('3168. Minimum Number of Chairs in a Waiting Room', () => {
  test('minimumChairs', () => {
    expect(minimumChairs('EEEEEEE')).toBe(7);
    expect(minimumChairs('ELELEEL')).toBe(2);
    expect(minimumChairs('ELEELEELLL')).toBe(3);
  });
});
