import { isSumEqual } from './isSumEqual';

describe('1880. Check if Word Equals Summation of Two Words', () => {
  test('isSumEqual', () => {
    expect(isSumEqual('acb', 'cba', 'cdb')).toBe(true);
    expect(isSumEqual('aaa', 'a', 'aab')).toBe(false);
    expect(isSumEqual('aaa', 'a', 'aaaa')).toBe(true);
  });
});
