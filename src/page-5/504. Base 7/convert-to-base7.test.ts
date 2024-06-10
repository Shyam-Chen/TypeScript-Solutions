import { convertToBase7, convertToBase72 } from './convert-to-base7';

describe('504. Base 7', () => {
  test('convertToBase7', () => {
    expect(convertToBase7(100)).toBe('202');
    expect(convertToBase7(-7)).toBe('-10');
  });

  test('convertToBase72', () => {
    expect(convertToBase72(100)).toBe('202');
    expect(convertToBase72(-7)).toBe('-10');
  });
});
