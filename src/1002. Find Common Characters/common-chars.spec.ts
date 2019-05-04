import { commonChars } from './common-chars';

describe('commonChars', () => {
  it('commonChars', () => {
    // TODO: including duplicates
    // expect(commonChars(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l']);
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });
});
