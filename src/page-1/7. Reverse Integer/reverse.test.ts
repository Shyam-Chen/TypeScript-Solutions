import { reverse } from './reverse';

describe('7. Reverse Integer', () => {
  test('reverse', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(-123)).toBe(-321);
    expect(reverse(120)).toBe(21);
  });
});
