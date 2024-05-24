import { rotateString } from './rotate-string';

describe('796. Rotate String', () => {
  it('rotateString', () => {
    expect(rotateString('abcde', 'cdeab')).toEqual(true);
    expect(rotateString('abcde', 'abced')).toEqual(false);
  });
});
