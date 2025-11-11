import { compress } from './compress';

describe('443. String Compression', () => {
  test('compress', () => {
    {
      const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
      const expected = ['a', '2', 'b', '2', 'c', '3'];
      const length = compress(chars);
      expect(length).toBe(6);
      const sliced = chars.slice(0, length);
      expect(sliced).toStrictEqual(expected);
    }

    {
      const chars = ['a'];
      const expected = ['a'];
      const length = compress(chars);
      expect(length).toBe(1);
      const sliced = chars.slice(0, length);
      expect(sliced).toStrictEqual(expected);
    }

    {
      const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
      const expected = ['a', 'b', '1', '2'];
      const length = compress(chars);
      expect(length).toBe(4);
      const sliced = chars.slice(0, length);
      expect(sliced).toStrictEqual(expected);
    }
  });
});
