import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { reverseList } from './reverse-list';

describe('206. Reverse Linked List', () => {
  test('reverseList', () => {
    const output = reverseList(generateLinkedList([1, 2, 3, 4, 5]));
    const expected = generateLinkedList([5, 4, 3, 2, 1]);
    expect(stringify(output)).toBe(stringify(expected));

    const output2 = reverseList(generateLinkedList([1, 2]));
    const expected2 = generateLinkedList([2, 1]);
    expect(stringify(output2)).toBe(stringify(expected2));

    const output3 = reverseList(generateLinkedList([]));
    const expected3 = generateLinkedList([]);
    expect(stringify(output3)).toBe(stringify(expected3));
  });
});
