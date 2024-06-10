import { generateLinkedListCycle } from '~/utils/linked-list';

import { hasCycle } from './has-cycle';

describe('141. Linked List Cycle', () => {
  test('hasCycle', () => {
    const linkedList1 = generateLinkedListCycle([3, 2, 0, -4], 1);
    expect(hasCycle(linkedList1)).toBe(true);

    const linkedList2 = generateLinkedListCycle([1, 2], 0);
    expect(hasCycle(linkedList2)).toBe(true);

    const linkedList3 = generateLinkedListCycle([1], -1);
    expect(hasCycle(linkedList3)).toBe(false);
  });
});
