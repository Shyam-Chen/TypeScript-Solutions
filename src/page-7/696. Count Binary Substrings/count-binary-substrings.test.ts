import { countBinarySubstrings } from './count-binary-substrings';

describe('696. Count Binary Substrings', () => {
  test('countBinarySubstrings', () => {
    expect(countBinarySubstrings('00110011')).toBe(6);
    expect(countBinarySubstrings('10101')).toBe(4);
  });
});
