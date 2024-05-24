import { uniqueMorseRepresentations } from './unique-morse-code-words';

describe('804. Unique Morse Code Words', () => {
  it('uniqueMorseRepresentations', () => {
    expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toEqual(2);
  });
});
