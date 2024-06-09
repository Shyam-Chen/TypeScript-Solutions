import { mergeAlternately, mergeAlternately2 } from './mergeAlternately';

describe('1768. Merge Strings Alternately', () => {
  it('mergeAlternately', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });

  it('mergeAlternately2', () => {
    expect(mergeAlternately2('abc', 'pqr')).toBe('apbqcr');
    expect(mergeAlternately2('ab', 'pqrs')).toBe('apbqrs');
    expect(mergeAlternately2('abcd', 'pq')).toBe('apbqcd');
  });
});
