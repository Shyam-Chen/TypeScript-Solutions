import { minOperations, minOperations2 } from './min-operations';

describe('1758. Minimum Changes To Make Alternating Binary String', () => {
  it('minOperations', () => {
    expect(minOperations('0100')).toEqual(1);
    expect(minOperations('10')).toEqual(0);
    expect(minOperations('1111')).toEqual(2);
  });

  it('minOperations2', () => {
    expect(minOperations2('0100')).toEqual(1);
    expect(minOperations2('10')).toEqual(0);
    expect(minOperations2('1111')).toEqual(2);
  });
});
