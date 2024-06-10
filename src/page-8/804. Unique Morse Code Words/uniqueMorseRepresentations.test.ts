import { uniqueMorseRepresentations } from './uniqueMorseRepresentations';

describe('804. Unique Morse Code Words', () => {
  test('uniqueMorseRepresentations', () => {
    expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2);
    expect(uniqueMorseRepresentations(['a'])).toBe(1);
  });
});
