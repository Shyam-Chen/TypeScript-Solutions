import { BinaryHeap, descend } from '@std/data-structures';

const maxHeap = new BinaryHeap<number>(descend);

// 元素入堆積
maxHeap.push(1, 3, 6, 5, 9, 8, 15);

// 取得堆積頂元素
console.log(maxHeap.peek()); // 15

// 頂元素出堆積
console.log(maxHeap.pop()); // 15
console.log(maxHeap.pop()); // 9
console.log(maxHeap.pop()); // 8

// 取得堆積大小
console.log(maxHeap.length); // 4

// 判斷堆積是否為空
console.log(maxHeap.isEmpty()); // false
