import { checkZeroOnes } from './checkZeroOnes';

describe('1869. Longer Contiguous Segments of Ones than Zeros', () => {
  test('checkZeroOnes', () => {
    expect(checkZeroOnes('1101')).toBe(true);
    expect(checkZeroOnes('111000')).toBe(false);
    expect(checkZeroOnes('110100010')).toBe(false);
  });
});
