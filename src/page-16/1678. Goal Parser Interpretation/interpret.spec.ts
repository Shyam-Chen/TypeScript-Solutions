import { interpret } from './interpret';

describe('1678. Goal Parser Interpretation', () => {
  it('interpret', () => {
    expect(interpret('G()(al)')).toEqual('Goal');
    expect(interpret('G()()()()(al)')).toEqual('Gooooal');
    expect(interpret('(al)G(al)()()G')).toEqual('alGalooG');
  });
});
