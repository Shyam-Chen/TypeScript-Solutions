import { calcEquation } from './calcEquation';

describe('399. Evaluate Division', () => {
  test('calcEquation', () => {
    {
      // biome-ignore format: the array should not be formatted
      const equations = [['a', 'b'], ['b', 'c']];
      const values = [2.0, 3.0];
      // biome-ignore format: the array should not be formatted
      const queries = [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']];
      const expected = [6.0, 0.5, -1.0, 1.0, -1.0];
      expect(calcEquation(equations, values, queries)).toStrictEqual(expected);
    }

    {
      // biome-ignore format: the array should not be formatted
      const equations = [['a', 'b'], ['b', 'c'], ['bc', 'cd']];
      const values = [1.5, 2.5, 5.0];
      // biome-ignore format: the array should not be formatted
      const queries = [['a', 'c'], ['c', 'b'], ['bc', 'cd'], ['cd', 'bc']];
      const expected = [3.75, 0.4, 5.0, 0.2];
      expect(calcEquation(equations, values, queries)).toStrictEqual(expected);
    }

    {
      const equations = [['a', 'b']];
      const values = [0.5];
      // biome-ignore format: the array should not be formatted
      const queries = [['a', 'b'], ['b', 'a'], ['a', 'c'], ['x', 'y']];
      const expected = [0.5, 2.0, -1.0, -1.0];
      expect(calcEquation(equations, values, queries)).toStrictEqual(expected);
    }
  });
});
