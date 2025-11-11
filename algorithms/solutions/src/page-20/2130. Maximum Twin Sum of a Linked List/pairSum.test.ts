import { generateLinkedList } from '~/utils/linked-list';

import { pairSum } from './pairSum';

describe('2130. Maximum Twin Sum of a Linked List', () => {
  test('pairSum', () => {
    {
      const head = generateLinkedList([5, 4, 2, 1]);
      expect(pairSum(head)).toBe(6);
    }

    {
      const head = generateLinkedList([4, 2, 2, 3]);
      expect(pairSum(head)).toBe(7);
    }

    {
      const head = generateLinkedList([1, 100000]);
      expect(pairSum(head)).toBe(100001);
    }
  });
});
