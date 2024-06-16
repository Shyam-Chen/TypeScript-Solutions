import { convert } from './convert';

describe('6. Zigzag Conversion', () => {
  test('convert', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    expect(convert('A', 1)).toBe('A');
  });
});
