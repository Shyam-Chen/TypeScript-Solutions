# 排序 (Sorting)

## 泡沫排序 (Bubble Sort)

依次比較相鄰的兩個元素，並將較大的元素交換到後面。

```ts
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;

  // 外層迴圈控制需要走訪的次數
  for (let i = 0; i < n; i++) {
    // 用來標記是否發生過交換，如果沒有交換過則說明陣列已經排序完成
    let swapped = false;

    // 內層迴圈進行相鄰元素的比較和交換
    for (let j = 0; j < n - i - 1; j++) {
      // 如果前面的元素比後面的元素大，交換這兩個元素
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 如果內層迴圈中沒有發生過交換，提前終止排序
    if (!swapped) break;
  }

  return arr;
}
```

時間複雜度為 O(n<sup>2</sup>)

## 選擇排序 (Selection Sort)

每次從未排序的部分中選出最小的元素，並將其放到已排序部分的最後。

```ts
function selectionSort(arr: number[]): number[] {
  let n = arr.length;

  // 外層迴圈負責走訪未排序的部分
  for (let i = 0; i < n - 1; i++) {
    // 假設當前元素是未排序部分的最小值
    let minIndex = i;

    // 內層迴圈找到未排序部分的最小值
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 更新最小值的索引
      }
    }

    // 如果找到比當前元素更小的元素，進行交換
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
```

時間複雜度為 O(n<sup>2</sup>)

## 插入排序 (Insertion Sort)

## 堆積排序 (Heap Sort)

## 合併排序 (Merge Sort)

## 快速排序 (Quicksort)

## 希爾排序 (Shellsort)

## 計數排序 (Counting Sort)

## 基數排序 (Radix Sort)

## 桶排序 (Bucket Sort)
