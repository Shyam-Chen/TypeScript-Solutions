import { buddyStrings } from './buddy-strings';

describe('859. Buddy Strings', () => {
  it('buddyStrings', () => {
    expect(buddyStrings('ab', 'ba')).toEqual(true);
    expect(buddyStrings('ab', 'ab')).toEqual(false);
    expect(buddyStrings('aa', 'aa')).toEqual(true);
    expect(buddyStrings('aaaaaaabc', 'aaaaaaacb')).toEqual(true);
    expect(buddyStrings('', 'aa')).toEqual(false);
  });
});
