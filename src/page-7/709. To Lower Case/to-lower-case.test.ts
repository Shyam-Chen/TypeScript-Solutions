import { toLowerCase, toLowerCase2 } from './to-lower-case';

describe('709. To Lower Case', () => {
  test('toLowerCase', () => {
    expect(toLowerCase('Hello')).toBe('hello');
    expect(toLowerCase('here')).toBe('here');
    expect(toLowerCase('LOVELY')).toBe('lovely');
  });

  test('toLowerCase2', () => {
    expect(toLowerCase2('Hello')).toBe('hello');
    expect(toLowerCase2('here')).toBe('here');
    expect(toLowerCase2('LOVELY')).toBe('lovely');
  });
});
