import { SmallestInfiniteSet } from './SmallestInfiniteSet';

describe('2336. Smallest Number in Infinite Set', () => {
  test('SmallestInfiniteSet', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();
    smallestInfiniteSet.addBack(2);
    expect(smallestInfiniteSet.popSmallest()).toBe(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(2);
    expect(smallestInfiniteSet.popSmallest()).toBe(3);
    smallestInfiniteSet.addBack(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(4);
    expect(smallestInfiniteSet.popSmallest()).toBe(5);
  });
});
