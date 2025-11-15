import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { oddEvenList } from './oddEvenList';

describe('328. Odd Even Linked List', () => {
  test('oddEvenList', () => {
    {
      const head = generateLinkedList([1, 2, 3, 4, 5]);
      const expected = generateLinkedList([1, 3, 5, 2, 4]);
      expect(stringify(oddEvenList(head))).toBe(stringify(expected));
    }

    {
      const head = generateLinkedList([2, 1, 3, 5, 6, 4, 7]);
      const expected = generateLinkedList([2, 3, 6, 7, 1, 5, 4]);
      expect(stringify(oddEvenList(head))).toBe(stringify(expected));
    }
  });
});
