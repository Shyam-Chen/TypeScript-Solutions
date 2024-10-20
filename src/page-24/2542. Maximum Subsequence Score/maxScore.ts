import { BinaryHeap, ascend } from '../../@std/data-structures';

type MaxScore = (nums1: number[], nums2: number[], k: number) => number;

/**
 * Accepted
 */
export const maxScore: MaxScore = (nums1, nums2, k) => {
  const n = nums1.length;

  // Create an array of indices sorted by nums2 in descending order
  const indices = Array.from({ length: n }, (_, i) => i).sort((a, b) => nums2[b] - nums2[a]);

  // Min-heap to maintain the top k largest elements from nums1
  const minHeap = new BinaryHeap<number>(ascend);
  let sum = 0;
  let maxScore = 0;

  // Iterate through the sorted indices
  for (let i = 0; i < n; i++) {
    const idx = indices[i];
    const num1 = nums1[idx];
    const num2 = nums2[idx];

    // Add the current element of nums1 to the heap
    minHeap.push(num1);
    sum += num1;

    // If the heap exceeds size k, remove the smallest element
    if (minHeap.length > k) {
      const removed = minHeap.pop() as number;
      sum -= removed;
    }

    // If the heap has exactly k elements, calculate the score
    if (minHeap.length === k) {
      const currentScore = sum * num2;
      maxScore = Math.max(maxScore, currentScore);
    }
  }

  return maxScore;
};
