import { stringify } from 'flatted';

import { generateLinkedList } from '~/utils/linked-list';

import { addTwoNumbers } from './addTwoNumbers';

describe('2. Add Two Numbers', () => {
  it('addTwoNumbers - Case 1', () => {
    const l1 = generateLinkedList([2, 4, 3]);
    const l2 = generateLinkedList([5, 6, 4]);
    const expected = generateLinkedList([7, 0, 8]);
    expect(stringify(addTwoNumbers(l1, l2))).toBe(stringify(expected));
  });

  it('addTwoNumbers - Case 2', () => {
    const l1 = generateLinkedList([0]);
    const l2 = generateLinkedList([0]);
    const expected = generateLinkedList([0]);
    expect(stringify(addTwoNumbers(l1, l2))).toBe(stringify(expected));
  });

  it('addTwoNumbers - Case 3', () => {
    const l1 = generateLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = generateLinkedList([9, 9, 9, 9]);
    const expected = generateLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
    expect(stringify(addTwoNumbers(l1, l2))).toBe(stringify(expected));
  });
});
