import { isPossibleToSplit } from './isPossibleToSplit';

describe('3046. Split the Array', () => {
  test('isPossibleToSplit', () => {
    expect(isPossibleToSplit([1, 1, 2, 2, 3, 4])).toBe(true);
    expect(isPossibleToSplit([1, 1, 1, 1])).toBe(false);
  });
});
