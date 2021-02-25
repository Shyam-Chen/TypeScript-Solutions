import { mergeAlternately, mergeAlternately2 } from './merge-alternately';

describe('1768. Merge Strings Alternately', () => {
  it('mergeAlternately', () => {
    expect(mergeAlternately('abc', 'pqr')).toEqual('apbqcr');
    expect(mergeAlternately('ab', 'pqrs')).toEqual('apbqrs');
    expect(mergeAlternately('abcd', 'pq')).toEqual('apbqcd');
  });

  it('mergeAlternately2', () => {
    expect(mergeAlternately2('abc', 'pqr')).toEqual('apbqcr');
    expect(mergeAlternately2('ab', 'pqrs')).toEqual('apbqrs');
    expect(mergeAlternately2('abcd', 'pq')).toEqual('apbqcd');
  });
});
