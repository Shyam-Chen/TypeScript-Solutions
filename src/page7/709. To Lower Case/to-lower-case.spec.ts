import { toLowerCase, toLowerCase2 } from './to-lower-case';

describe('709. To Lower Case', () => {
  it('toLowerCase', () => {
    expect(toLowerCase('Hello')).toEqual('hello');
    expect(toLowerCase('here')).toEqual('here');
    expect(toLowerCase('LOVELY')).toEqual('lovely');
  });

  it('toLowerCase2', () => {
    expect(toLowerCase2('Hello')).toEqual('hello');
    expect(toLowerCase2('here')).toEqual('here');
    expect(toLowerCase2('LOVELY')).toEqual('lovely');
  });
});
