import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { mergeTwoLists } from './mergeTwoLists';

describe('21. Merge Two Sorted Lists', () => {
  test('mergeTwoLists', () => {
    {
      const list1 = generateLinkedList([1, 2, 4]);
      const list2 = generateLinkedList([1, 3, 4]);
      const expected = generateLinkedList([1, 1, 2, 3, 4, 4]);
      expect(stringify(mergeTwoLists(list1, list2))).toBe(stringify(expected));
    }

    {
      const list1 = generateLinkedList([]);
      const list2 = generateLinkedList([]);
      const expected = generateLinkedList([]);
      expect(stringify(mergeTwoLists(list1, list2))).toBe(stringify(expected));
    }

    {
      const list1 = generateLinkedList([]);
      const list2 = generateLinkedList([0]);
      const expected = generateLinkedList([0]);
      expect(stringify(mergeTwoLists(list1, list2))).toBe(stringify(expected));
    }
  });
});
