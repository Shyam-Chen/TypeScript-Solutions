import { convertTemperature } from './convertTemperature';

describe('2469. Convert the Temperature', () => {
  test('convertTemperature', () => {
    expect(convertTemperature(36.5)).toStrictEqual([309.65, 97.7]);
    expect(convertTemperature(122.11)).toStrictEqual([395.26, 251.798]);
  });
});
