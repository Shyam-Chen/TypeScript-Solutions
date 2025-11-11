import { myAtoi } from './myAtoi';

describe('8. String to Integer (atoi)', () => {
  test('myAtoi', () => {
    expect(myAtoi('42')).toBe(42);
    expect(myAtoi('   -042')).toBe(-42);
    expect(myAtoi('1337c0d3')).toBe(1337);
    expect(myAtoi('0-1')).toBe(0);
    expect(myAtoi('words and 987')).toBe(0);
  });
});
