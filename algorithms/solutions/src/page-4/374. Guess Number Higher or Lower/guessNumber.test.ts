import { guessNumber, setPick } from './guessNumber';

describe('374. Guess Number Higher or Lower', () => {
  test('guessNumber', () => {
    setPick(6);
    expect(guessNumber(10)).toBe(6);

    setPick(1);
    expect(guessNumber(1)).toBe(1);

    setPick(1);
    expect(guessNumber(2)).toBe(1);
  });
});
