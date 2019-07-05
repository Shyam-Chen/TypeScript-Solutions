import { singleNumber } from './single-number';

describe('singleNumber', () => {
  it('singleNumber', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  });
});
