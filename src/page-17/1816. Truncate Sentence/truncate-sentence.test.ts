import { truncateSentence, truncateSentence2 } from './truncate-sentence';

describe('1816. Truncate Sentence', () => {
  test('truncateSentence', () => {
    expect(truncateSentence('Hello how are you Contestant', 4)).toBe('Hello how are you');
    expect(truncateSentence('What is the solution to this problem', 4)).toBe(
      'What is the solution',
    );
    expect(truncateSentence('chopper is not a tanuki', 5)).toBe('chopper is not a tanuki');
  });

  test('truncateSentence2', () => {
    expect(truncateSentence2('Hello how are you Contestant', 4)).toBe('Hello how are you');
    expect(truncateSentence2('What is the solution to this problem', 4)).toBe(
      'What is the solution',
    );
    expect(truncateSentence2('chopper is not a tanuki', 5)).toBe('chopper is not a tanuki');
  });
});
