import { getSumS1, getSumS2 } from './sum-of-two-integers';

describe('getSum', () => {
  it('getSumS1', () => {
    expect(getSumS1(1, 2)).toEqual(3);
  });

  it('getSumS2', () => {
    expect(getSumS2(1, 2)).toEqual(3);
  });
});
