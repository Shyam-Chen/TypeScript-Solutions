import { fib } from './fib';

describe('509. Fibonacci Number', () => {
  test('fib', () => {
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
  });
});
