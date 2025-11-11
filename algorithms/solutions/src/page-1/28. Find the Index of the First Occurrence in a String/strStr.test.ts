import { strStr } from './strStr';

describe('28. Find the Index of the First Occurrence in a String', () => {
  test('strStr', () => {
    expect(strStr('sadbutsad', 'sad')).toBe(0);
    expect(strStr('leetcode', 'leeto')).toBe(-1);
  });
});
