import { reverse } from './reverse';

describe('7. Reverse Integer', () => {
  it('reverse', () => {
    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
    expect(reverse(0)).toEqual(0);
  });
});
