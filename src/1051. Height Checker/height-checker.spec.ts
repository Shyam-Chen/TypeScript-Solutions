import { heightChecker } from './height-checker';

describe('heightChecker', () => {
  it('heightChecker', () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toEqual(3);
  });
});
