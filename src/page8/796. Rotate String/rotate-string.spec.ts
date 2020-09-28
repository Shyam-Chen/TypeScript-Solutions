import { rotateString, rotateString2 } from './rotate-string';

describe('796. Rotate String', () => {
  it('rotateString', () => {
    expect(rotateString('abcde', 'cdeab')).toEqual(true);
    expect(rotateString('abcde', 'abced')).toEqual(false);
  });

  it('rotateString2', () => {
    expect(rotateString2('abcde', 'cdeab')).toEqual(true);
    expect(rotateString2('abcde', 'abced')).toEqual(false);
  });
});
