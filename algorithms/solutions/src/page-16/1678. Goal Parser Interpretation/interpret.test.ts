import { interpret, interpret2 } from './interpret';

describe('1678. Goal Parser Interpretation', () => {
  test('interpret', () => {
    expect(interpret('G()(al)')).toBe('Goal');
    expect(interpret('G()()()()(al)')).toBe('Gooooal');
    expect(interpret('(al)G(al)()()G')).toBe('alGalooG');
  });

  test('interpret2', () => {
    expect(interpret2('G()(al)')).toBe('Goal');
    expect(interpret2('G()()()()(al)')).toBe('Gooooal');
    expect(interpret2('(al)G(al)()()G')).toBe('alGalooG');
  });
});
