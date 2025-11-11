import { fullJustify } from './fullJustify';

describe('68. Text Justification', () => {
  test('fullJustify', () => {
    expect(
      fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16),
    ).toStrictEqual(['This    is    an', 'example  of text', 'justification.  ']);

    expect(fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)).toStrictEqual([
      'What   must   be',
      'acknowledgment  ',
      'shall be        ',
    ]);

    expect(
      fullJustify(
        [
          'Science',
          'is',
          'what',
          'we',
          'understand',
          'well',
          'enough',
          'to',
          'explain',
          'to',
          'a',
          'computer.',
          'Art',
          'is',
          'everything',
          'else',
          'we',
          'do',
        ],
        20,
      ),
    ).toStrictEqual([
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  ',
    ]);
  });
});
