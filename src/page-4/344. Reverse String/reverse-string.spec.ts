import { reverseString, reverseString2 } from './reverse-string';

describe('344. Reverse String', () => {
  it('reverseString', () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);

    const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(s2);
    expect(s2).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });

  it('reverseString2', () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString2(s);
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);

    const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString2(s2);
    expect(s2).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
