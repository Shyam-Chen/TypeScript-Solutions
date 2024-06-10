import { reorderSpaces } from './reorder-spaces';

describe('1592. Rearrange Spaces Between Words', () => {
  test('reorderSpaces', () => {
    expect(reorderSpaces('  this   is  a sentence ')).toBe('this   is   a   sentence');
    expect(reorderSpaces(' practice   makes   perfect')).toBe('practice   makes   perfect ');
    expect(reorderSpaces('hello   world')).toBe('hello   world');
    expect(reorderSpaces('  walks  udp package   into  bar a')).toBe(
      'walks  udp  package  into  bar  a ',
    );
    expect(reorderSpaces('a')).toBe('a');
  });
});
