import { countPrefixes } from './count-prefixes';

describe('2255. Count Prefixes of a Given String', () => {
  test('countPrefixes', () => {
    expect(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')).toBe(3);
    expect(countPrefixes(['a', 'a'], 'aa')).toBe(2);
  });
});
