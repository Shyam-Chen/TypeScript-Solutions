import { countAndSay } from './countAndSay';

describe('38. Count and Say', () => {
  test('countAndSay', () => {
    expect(countAndSay(1)).toBe('1');
    expect(countAndSay(4)).toBe('1211');
  });
});
