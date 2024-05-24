import { commonChars, commonChars2 } from './common-chars';

describe('1002. Find Common Characters', () => {
  it('commonChars', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l']);
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });

  it('commonChars2', () => {
    expect(commonChars2(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l']);
    expect(commonChars2(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });
});
