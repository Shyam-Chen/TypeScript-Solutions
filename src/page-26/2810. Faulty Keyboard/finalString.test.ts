import { finalString } from './finalString';

describe('2810. Faulty Keyboard', () => {
  test('finalString', () => {
    expect(finalString('string')).toBe('rtsng');
    expect(finalString('poiinter')).toBe('ponter');
  });
});
