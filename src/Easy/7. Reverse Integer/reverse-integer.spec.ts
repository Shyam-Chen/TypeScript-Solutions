import { reverse } from './reverse-integer';

describe('reverseInteger', () => {
  it('reverse', () => {
    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
  });
});
