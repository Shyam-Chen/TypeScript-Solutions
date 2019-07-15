import { addBinary } from './add-binary';

describe('67. Add Binary', () => {
  it('addBinary', () => {
    expect(addBinary('11', '1')).toEqual('100');
    expect(addBinary('1010', '1011')).toEqual('10101');
  });
});
