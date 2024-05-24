import { countAndSay } from './count-and-say';

describe('38. Count and Say', () => {
  it('countAndSay', () => {
    expect(countAndSay(1)).toEqual('1');
    expect(countAndSay(4)).toEqual('1211');
  });
});
