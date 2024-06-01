import { numberOfPairs, numberOfPairs2 } from './numberOfPairs';

describe('3162. Find the Number of Good Pairs I', () => {
  it('numberOfPairs', () => {
    expect(numberOfPairs([1, 3, 4], [1, 3, 4], 1)).toBe(5);
    expect(numberOfPairs([1, 2, 4, 12], [2, 4], 3)).toBe(2);
  });

  it('numberOfPairs2', () => {
    expect(numberOfPairs2([1, 3, 4], [1, 3, 4], 1)).toBe(5);
    expect(numberOfPairs2([1, 2, 4, 12], [2, 4], 3)).toBe(2);
  });
});
