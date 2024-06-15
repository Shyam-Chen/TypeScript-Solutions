import { reorderSpaces } from './reorderSpaces';

describe('1592. Rearrange Spaces Between Words', () => {
  test('reorderSpaces', () => {
    expect(reorderSpaces('  this   is  a sentence ')).toBe('this   is   a   sentence');
    expect(reorderSpaces(' practice   makes   perfect')).toBe('practice   makes   perfect ');
  });
});
