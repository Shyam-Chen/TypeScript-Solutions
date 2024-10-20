# 堆積 (Heap)

https://jsr.io/@std/data-structures/doc/~/BinaryHeap

```ts
import { BinaryHeap, ascend, descend } from '@std/data-structures';
```

## 小頂堆積 (Min Heap)

父節點的值總是小於或等於其子節點的值。

```ts
[1, 3, 6, 5, 9, 8, 15];
```

```mermaid
graph TD
    0[1] --> 1[3]
    0 --> 2[6]
    1 --> 3[5]
    1 --> 4[9]
    2 --> 5[8]
    2 --> 6[15]
```

```ts
import { BinaryHeap, ascend } from '@std/data-structures';

const minHeap = new BinaryHeap<number>(ascend);

minHeap.push(1, 3, 5, 6, 8, 9, 15);
```

## 大頂堆積 (Max Heap)

父節點的值總是大於或等於其子節點的值。

```ts
[15, 9, 8, 1, 3, 6, 5];
```

```mermaid
graph TD
    0[15] --> 1[9]
    0 --> 2[8]
    1 --> 3[1]
    1 --> 4[3]
    2 --> 5[6]
    2 --> 6[5]
```

```ts
import { BinaryHeap, descend } from '@std/data-structures';

const maxHeap = new BinaryHeap<number>(descend);

maxHeap.push(1, 3, 5, 6, 8, 9, 15);
```
