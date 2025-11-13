import { BinaryHeap } from '@std/data-structures';

type TotalCost = (costs: number[], k: number, candidates: number) => number;

/**
 * Accepted
 */
export const totalCost: TotalCost = (costs, k, candidates) => {
  const n = costs.length;

  let totalCost = 0;

  const firstHeap = new BinaryHeap<[number, number]>((a, b) => a[0] - b[0]); // min-heap for (cost, index)
  const lastHeap = new BinaryHeap<[number, number]>((a, b) => a[0] - b[0]); // min-heap for (cost, index)

  // Initialize firstHeap with the first `candidates` workers
  for (let i = 0; i < Math.min(candidates, n); i++) {
    firstHeap.push([costs[i], i]);
  }

  // Initialize lastHeap with the last `candidates` workers
  for (let i = n - 1; i >= Math.max(n - candidates, candidates); i--) {
    lastHeap.push([costs[i], i]);
  }

  // Track the bounds for the remaining workers not in any heap
  let left = candidates;
  let right = n - candidates - 1;

  // Hire `k` workers based on the minimum cost in each session
  for (let i = 0; i < k; i++) {
    let chosen: [number, number];

    const firstRoot = firstHeap.peek() as [number, number];
    const lastRoot = lastHeap.peek() as [number, number];

    if (firstHeap.isEmpty() || (!lastHeap.isEmpty() && lastRoot[0] < firstRoot[0])) {
      // Choose from lastHeap if it has the minimum cost
      chosen = lastHeap.pop() as [number, number];
      totalCost += chosen[0];

      // If there's any remaining candidate on the right side, add it to lastHeap
      if (right >= left) {
        lastHeap.push([costs[right], right]);
        right -= 1;
      }
    } else {
      // Choose from firstHeap
      chosen = firstHeap.pop() as [number, number];
      totalCost += chosen[0];

      // If there's any remaining candidate on the left side, add it to firstHeap
      if (left <= right) {
        firstHeap.push([costs[left], left]);
        left += 1;
      }
    }
  }

  return totalCost;
};
