import { generate } from './triangle';

describe("118. Pascal's Triangle", () => {
  it('generate', () => {
    expect(generate(5)).toEqual(
      [
            [1],
           [1, 1],
          [1, 2, 1],
         [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ],
    );
  });
});
