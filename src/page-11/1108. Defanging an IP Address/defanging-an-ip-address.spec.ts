import { defangIPaddr } from './defanging-an-ip-address';

describe('1108. Defanging an IP Address', () => {
  it('defangIPaddr', () => {
    expect(defangIPaddr('1.1.1.1')).toEqual('1[.]1[.]1[.]1');
    expect(defangIPaddr('255.100.50.0')).toEqual('255[.]100[.]50[.]0');
  });
});
