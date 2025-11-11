/**
 * Accepted
 */
export class StockSpanner {
  private stack: [number, number][];

  constructor() {
    // Initialize the stack, where each element is [price, span]
    this.stack = [];
  }

  next(price: number): number {
    let span = 1;

    // While stack is not empty and the current price is greater than or equal to the price on top of the stack
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
      // Pop the top of the stack and add its span to the current span
      span += (this.stack.pop() as [number, number])[1];
    }

    // Push the current price and its span onto the stack
    this.stack.push([price, span]);

    return span;
  }
}
