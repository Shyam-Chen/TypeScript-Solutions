import { isSumEqual } from './is-sum-equal';

describe('1880. Check if Word Equals Summation of Two Words', () => {
  it('isSumEqual', () => {
    expect(isSumEqual('acb', 'cba', 'cdb')).toEqual(true);
    expect(isSumEqual('aaa', 'a', 'aab')).toEqual(false);
    expect(isSumEqual('aaa', 'a', 'aaaa')).toEqual(true);
  });
});
