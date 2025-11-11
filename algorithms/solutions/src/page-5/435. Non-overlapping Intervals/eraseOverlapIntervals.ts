type EraseOverlapIntervals = (intervals: number[][]) => number;

/**
 * Accepted
 */
export const eraseOverlapIntervals: EraseOverlapIntervals = (intervals) => {
  // Step 1: Sort intervals by end time
  intervals.sort((a, b) => a[1] - b[1]);

  let removalCount = 0;
  let prevEnd = intervals[0][1]; // Initialize with the end time of the first interval

  // Step 2: Traverse the sorted intervals starting from the second interval
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    // Step 3: Check for overlap
    if (start < prevEnd) {
      // Overlapping interval found, increment removal count
      removalCount += 1;
    } else {
      // Update `prevEnd` to the end of the current interval if there's no overlap
      prevEnd = end;
    }
  }

  return removalCount;
};
