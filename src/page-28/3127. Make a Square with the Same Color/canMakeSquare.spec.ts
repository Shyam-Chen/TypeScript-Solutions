import { canMakeSquare } from './canMakeSquare';

describe('3127. Make a Square with the Same Color', () => {
  it('canMakeSquare', () => {
    expect(
      canMakeSquare([
        ['B', 'W', 'B'],
        ['B', 'W', 'W'],
        ['B', 'W', 'B'],
      ]),
    ).toBe(true);

    expect(
      canMakeSquare([
        ['B', 'W', 'B'],
        ['W', 'B', 'W'],
        ['B', 'W', 'B'],
      ]),
    ).toBe(false);

    expect(
      canMakeSquare([
        ['B', 'W', 'B'],
        ['B', 'W', 'W'],
        ['B', 'W', 'W'],
      ]),
    ).toBe(true);
  });
});
