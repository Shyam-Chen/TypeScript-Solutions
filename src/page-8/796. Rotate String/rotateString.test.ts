import { rotateString } from './rotateString';

describe('796. Rotate String', () => {
  test('rotateString', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true);
    expect(rotateString('abcde', 'abced')).toBe(false);
  });
});
