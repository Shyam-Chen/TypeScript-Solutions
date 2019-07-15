import { isValid } from './valid-parentheses';

describe('20. Valid Parentheses', () => {
  it('isValid', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('([)]')).toEqual(false);
    expect(isValid('{[]}')).toEqual(true);
  });
});
