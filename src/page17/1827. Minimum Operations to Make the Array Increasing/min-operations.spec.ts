import { minOperations } from './min-operations';

describe('1827. Minimum Operations to Make the Array Increasing', () => {
  it('minOperations', () => {
    expect(minOperations([1, 1, 1])).toEqual(3);
    expect(minOperations([1, 5, 2, 4, 1])).toEqual(14);
    expect(minOperations([8])).toEqual(0);
  });
});
