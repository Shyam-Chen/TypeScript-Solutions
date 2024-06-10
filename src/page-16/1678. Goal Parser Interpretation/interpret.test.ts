import { interpret } from './interpret';

describe('1678. Goal Parser Interpretation', () => {
  test('interpret', () => {
    expect(interpret('G()(al)')).toBe('Goal');
    expect(interpret('G()()()()(al)')).toBe('Gooooal');
    expect(interpret('(al)G(al)()()G')).toBe('alGalooG');
  });
});
