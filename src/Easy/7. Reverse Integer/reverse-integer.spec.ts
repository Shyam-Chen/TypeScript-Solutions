import { reverse } from './reverse-integer';

describe('7. Reverse Integer', () => {
  it('reverse', () => {
    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
  });
});
