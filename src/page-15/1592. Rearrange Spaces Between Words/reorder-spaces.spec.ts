import { reorderSpaces } from './reorder-spaces';

describe('1592. Rearrange Spaces Between Words', () => {
  it('reorderSpaces', () => {
    expect(reorderSpaces('  this   is  a sentence ')).toEqual('this   is   a   sentence');
    expect(reorderSpaces(' practice   makes   perfect')).toEqual('practice   makes   perfect ');
    expect(reorderSpaces('hello   world')).toEqual('hello   world');
    expect(reorderSpaces('  walks  udp package   into  bar a')).toEqual(
      'walks  udp  package  into  bar  a ',
    );
    expect(reorderSpaces('a')).toEqual('a');
  });
});
