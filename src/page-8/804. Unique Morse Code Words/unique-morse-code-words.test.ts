import { uniqueMorseRepresentations } from './unique-morse-code-words';

describe('804. Unique Morse Code Words', () => {
  test('uniqueMorseRepresentations', () => {
    expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2);
  });
});
