import { ascend, BinaryHeap } from '@std/data-structures';

const minHeap = new BinaryHeap<number>(ascend);

// 元素入堆積
minHeap.push(1, 3, 6, 5, 9, 8, 15);

// 取得堆積頂元素
console.log(minHeap.peek()); // 1

// 頂元素出堆積
console.log(minHeap.pop()); // 1
console.log(minHeap.pop()); // 3
console.log(minHeap.pop()); // 5

// 取得堆積長度
console.log(minHeap.length); // 4

// 判斷堆積是否為空
console.log(minHeap.isEmpty()); // false
