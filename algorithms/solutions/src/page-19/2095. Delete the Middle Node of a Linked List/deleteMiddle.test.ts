import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { deleteMiddle } from './deleteMiddle';

describe('2095. Delete the Middle Node of a Linked List', () => {
  test('deleteMiddle', () => {
    {
      const head = generateLinkedList([1, 3, 4, 7, 1, 2, 6]);
      const expected = generateLinkedList([1, 3, 4, 1, 2, 6]);
      expect(stringify(deleteMiddle(head))).toBe(stringify(expected));
    }

    {
      const head = generateLinkedList([1, 2, 3, 4]);
      const expected = generateLinkedList([1, 2, 4]);
      expect(stringify(deleteMiddle(head))).toBe(stringify(expected));
    }

    {
      const head = generateLinkedList([2, 1]);
      const expected = generateLinkedList([2]);
      expect(stringify(deleteMiddle(head))).toBe(stringify(expected));
    }
  });
});
