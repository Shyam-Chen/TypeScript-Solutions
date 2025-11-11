/**
 * Accepted
 */
export class OrderedStream {
  stream: string[];
  ptr = 0;

  constructor(n: number) {
    this.stream = Array(n);
  }

  insert(idKey: number, value: string): string[] {
    const chunk: string[] = [];

    this.stream[idKey - 1] = value;

    while (this.stream[this.ptr]) {
      chunk.push(this.stream[this.ptr]);
      this.ptr += 1;
    }

    return chunk;
  }
}
