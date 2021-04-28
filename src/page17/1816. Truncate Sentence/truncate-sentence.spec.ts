import { truncateSentence, truncateSentence2 } from './truncate-sentence';

describe('1816. Truncate Sentence', () => {
  it('truncateSentence', () => {
    expect(truncateSentence('Hello how are you Contestant', 4)).toEqual('Hello how are you');
    expect(truncateSentence('What is the solution to this problem', 4)).toEqual(
      'What is the solution',
    );
    expect(truncateSentence('chopper is not a tanuki', 5)).toEqual('chopper is not a tanuki');
  });

  it('truncateSentence2', () => {
    expect(truncateSentence2('Hello how are you Contestant', 4)).toEqual('Hello how are you');
    expect(truncateSentence2('What is the solution to this problem', 4)).toEqual(
      'What is the solution',
    );
    expect(truncateSentence2('chopper is not a tanuki', 5)).toEqual('chopper is not a tanuki');
  });
});
