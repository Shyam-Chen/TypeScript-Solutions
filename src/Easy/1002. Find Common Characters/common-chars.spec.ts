import { commonChars } from './common-chars';

describe('1002. Find Common Characters', () => {
  it('commonChars', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l']);
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });
});
