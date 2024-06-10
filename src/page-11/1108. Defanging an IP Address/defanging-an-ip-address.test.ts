import { defangIPaddr } from './defanging-an-ip-address';

describe('1108. Defanging an IP Address', () => {
  test('defangIPaddr', () => {
    expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
    expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });
});
