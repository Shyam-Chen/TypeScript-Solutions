import { replaceWords } from './replaceWords';

describe('648. Replace Words', () => {
  test('replaceWords', () => {
    const d1 = ['cat', 'bat', 'rat'];
    const s1 = 'the cattle was rattled by the battery';
    expect(replaceWords(d1, s1)).toBe('the cat was rat by the bat');

    const d2 = ['a', 'b', 'c'];
    const s2 = 'aadsfasf absbs bbab cadsfafs';
    expect(replaceWords(d2, s2)).toBe('a a b c');

    const d3 = ['a', 'aa', 'aaa', 'aaaa'];
    const s3 = 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa';
    expect(replaceWords(d3, s3)).toBe('a a a a a a a a bbb baba a');

    const d4 = ['catt', 'cat', 'bat', 'rat'];
    const s4 = 'the cattle was rattled by the battery';
    expect(replaceWords(d4, s4)).toBe('the cat was rat by the bat');

    const d5 = ['ac', 'ab'];
    const s5 = 'it is abnormal that this solution is accepted';
    expect(replaceWords(d5, s5)).toBe('it is ab that this solution is ac');
  });
});
