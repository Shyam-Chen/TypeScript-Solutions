import { countPrefixes } from './count-prefixes';

describe('2255. Count Prefixes of a Given String', () => {
  it('countPrefixes', () => {
    expect(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')).toEqual(3);
    expect(countPrefixes(['a', 'a'], 'aa')).toEqual(2);
  });
});
