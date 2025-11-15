import { canVisitAllRooms } from './canVisitAllRooms';

describe('841. Keys and Rooms', () => {
  test('canVisitAllRooms', () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
  });
});
