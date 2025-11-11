import { dailyTemperatures } from './dailyTemperatures';

describe('739. Daily Temperatures', () => {
  test('dailyTemperatures', () => {
    {
      const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
      const expected = [1, 1, 4, 2, 1, 1, 0, 0];
      expect(dailyTemperatures(temperatures)).toStrictEqual(expected);
    }

    {
      const temperatures = [30, 40, 50, 60];
      const expected = [1, 1, 1, 0];
      expect(dailyTemperatures(temperatures)).toStrictEqual(expected);
    }

    {
      const temperatures = [30, 60, 90];
      const expected = [1, 1, 0];
      expect(dailyTemperatures(temperatures)).toStrictEqual(expected);
    }
  });
});
