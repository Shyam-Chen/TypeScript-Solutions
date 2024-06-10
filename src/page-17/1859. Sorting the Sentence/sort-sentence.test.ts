import { sortSentence } from './sort-sentence';

describe('1859. Sorting the Sentence', () => {
  test('sortSentence', () => {
    expect(sortSentence('is2 sentence4 This1 a3')).toBe('This is a sentence');
    expect(sortSentence('Myself2 Me1 I4 and3')).toBe('Me Myself and I');
  });
});
