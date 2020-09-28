import { countBinarySubstrings } from './count-binary-substrings';

describe('696. Count Binary Substrings', () => {
  it('countBinarySubstrings', () => {
    expect(countBinarySubstrings('00110011')).toEqual(6);
    expect(countBinarySubstrings('10101')).toEqual(4);
  });
});
