import { ascend, BinaryHeap } from '../../@std/data-structures';

type findKthLargest = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const findKthLargest: findKthLargest = (nums, k) => {
  // Create a min-heap that will store the top k largest elements
  const minHeap = new BinaryHeap<number>(ascend);

  // Iterate over the array
  for (const num of nums) {
    // Add the current number to the heap
    minHeap.push(num);

    // If the heap size exceeds k, remove the smallest element
    if (minHeap.length > k) {
      minHeap.pop(); // Removes the smallest element, which is at the root of the min-heap
    }
  }

  // The root of the min-heap is the kth largest element
  return minHeap.peek() || 0; // Peek returns the smallest element in the heap, which is the kth largest in the array
};

/**
 * Accepted
 */
export const findKthLargest2: findKthLargest = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
