/**
 * Accepted
 */
export class RecentCounter {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    // Add the new request to the queue
    this.queue.push(t);

    // Remove requests that are outside the 3000 milliseconds window
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    // The size of the queue is the number of requests in the last 3000 milliseconds
    return this.queue.length;
  }
}
