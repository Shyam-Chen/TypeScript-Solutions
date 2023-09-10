import { isValid } from './is-valid';

describe('20. Valid Parentheses', () => {
  it('isValid', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('([)]')).toEqual(false);
    expect(isValid('{[]}')).toEqual(true);
  });
});
