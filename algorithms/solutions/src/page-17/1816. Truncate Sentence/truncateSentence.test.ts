import { truncateSentence, truncateSentence2 } from './truncateSentence';

describe('1816. Truncate Sentence', () => {
  test('truncateSentence', () => {
    {
      const s = 'Hello how are you Contestant';
      expect(truncateSentence(s, 4)).toBe('Hello how are you');
    }

    {
      const s = 'What is the solution to this problem';
      expect(truncateSentence(s, 4)).toBe('What is the solution');
    }

    {
      const s = 'chopper is not a tanuki';
      expect(truncateSentence(s, 5)).toBe('chopper is not a tanuki');
    }
  });

  test('truncateSentence2', () => {
    {
      const s = 'Hello how are you Contestant';
      expect(truncateSentence2(s, 4)).toBe('Hello how are you');
    }

    {
      const s = 'What is the solution to this problem';
      expect(truncateSentence2(s, 4)).toBe('What is the solution');
    }

    {
      const s = 'chopper is not a tanuki';
      expect(truncateSentence2(s, 5)).toBe('chopper is not a tanuki');
    }
  });
});
