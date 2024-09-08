type CanVisitAllRooms = (rooms: number[][]) => boolean;

/**
 * Accepted
 */
export const canVisitAllRooms: CanVisitAllRooms = (rooms) => {
  const visited = new Set<number>();

  function dfs(room: number) {
    visited.add(room);

    for (const key of rooms[room]) {
      if (!visited.has(key)) {
        dfs(key);
      }
    }
  }

  dfs(0);

  return visited.size === rooms.length;
};
