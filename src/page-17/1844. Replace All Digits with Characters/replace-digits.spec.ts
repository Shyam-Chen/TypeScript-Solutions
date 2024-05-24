import { replaceDigits } from './replace-digits';

describe('1844. Replace All Digits with Characters', () => {
  it('replaceDigits', () => {
    expect(replaceDigits('a1c1e1')).toEqual('abcdef');
    expect(replaceDigits('a1b2c3d4e')).toEqual('abbdcfdhe');
  });
});
