import { minOperations, minOperations2 } from './min-operations';

describe('1758. Minimum Changes To Make Alternating Binary String', () => {
  test('minOperations', () => {
    expect(minOperations('0100')).toBe(1);
    expect(minOperations('10')).toBe(0);
    expect(minOperations('1111')).toBe(2);
  });

  test('minOperations2', () => {
    expect(minOperations2('0100')).toBe(1);
    expect(minOperations2('10')).toBe(0);
    expect(minOperations2('1111')).toBe(2);
  });
});
