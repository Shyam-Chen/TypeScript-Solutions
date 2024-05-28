import { fib } from './fib';

describe('509. Fibonacci Number', () => {
  it('fib', () => {
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
  });
});
