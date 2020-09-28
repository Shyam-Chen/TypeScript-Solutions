import { strStr } from './str-str';

describe('28. Implement strStr()', () => {
  it('strStr', () => {
    expect(strStr('hello', 'll')).toEqual(2);
    expect(strStr('aaaaa', 'bba')).toEqual(-1);
  });
});
