import { buddyStrings } from './buddyStrings';

describe('859. Buddy Strings', () => {
  test('buddyStrings', () => {
    expect(buddyStrings('ab', 'ba')).toBe(true);
    expect(buddyStrings('ab', 'ab')).toBe(false);
    expect(buddyStrings('aa', 'aa')).toBe(true);
  });
});
