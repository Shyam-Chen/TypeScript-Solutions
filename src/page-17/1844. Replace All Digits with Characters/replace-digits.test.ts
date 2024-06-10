import { replaceDigits } from './replace-digits';

describe('1844. Replace All Digits with Characters', () => {
  test('replaceDigits', () => {
    expect(replaceDigits('a1c1e1')).toBe('abcdef');
    expect(replaceDigits('a1b2c3d4e')).toBe('abbdcfdhe');
  });
});
