import { generateLinkedListCycle } from '~/utils/linked-list';

import { hasCycle } from './linked-list-cycle';

describe('141. Linked List Cycle', () => {
  it('hasCycle', () => {
    const linkedList1 = generateLinkedListCycle([3, 2, 0, -4], 1);
    const linkedList2 = generateLinkedListCycle([1, 2], 0);
    const linkedList3 = generateLinkedListCycle([1], -1);

    expect(hasCycle(linkedList1)).toEqual(true);
    expect(hasCycle(linkedList2)).toEqual(true);
    expect(hasCycle(linkedList3)).toEqual(false);
  });
});
