import { commonChars, commonChars2 } from './common-chars';

describe('1002. Find Common Characters', () => {
  test('commonChars', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toStrictEqual(['e', 'l', 'l']);
    expect(commonChars(['cool', 'lock', 'cook'])).toStrictEqual(['c', 'o']);
  });

  test('commonChars2', () => {
    expect(commonChars2(['bella', 'label', 'roller'])).toStrictEqual(['e', 'l', 'l']);
    expect(commonChars2(['cool', 'lock', 'cook'])).toStrictEqual(['c', 'o']);
  });
});
