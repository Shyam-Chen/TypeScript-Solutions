import { uniqueMorseRepresentations } from './unique-morse-code-words';

describe('uniqueMorseRepresentations', () => {
  it('uniqueMorseRepresentations', () => {
    expect(
      uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']),
    ).toEqual(2);
  });
});
