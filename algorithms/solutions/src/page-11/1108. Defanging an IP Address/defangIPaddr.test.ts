import { defangIPaddr, defangIPaddr2 } from './defangIPaddr';

describe('1108. Defanging an IP Address', () => {
  test('defangIPaddr', () => {
    expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
    expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });

  test('defangIPaddr2', () => {
    expect(defangIPaddr2('1.1.1.1')).toBe('1[.]1[.]1[.]1');
    expect(defangIPaddr2('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });
});
