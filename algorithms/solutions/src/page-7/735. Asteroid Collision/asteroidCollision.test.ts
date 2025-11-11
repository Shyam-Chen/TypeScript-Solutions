import { asteroidCollision } from './asteroidCollision';

describe('735. Asteroid Collision', () => {
  test('asteroidCollision', () => {
    expect(asteroidCollision([5, 10, -5])).toStrictEqual([5, 10]);
    expect(asteroidCollision([8, -8])).toStrictEqual([]);
    expect(asteroidCollision([10, 2, -5])).toStrictEqual([10]);
  });
});
