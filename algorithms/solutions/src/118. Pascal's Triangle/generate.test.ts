import { generate } from './generate';

describe("118. Pascal's Triangle", () => {
  test('generate', () => {
    expect(generate(5)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    expect(generate(1)).toStrictEqual([[1]]);
  });
});
