export class OrderedStream {
  public pointer = 0;

  public list: string[] = [];

  constructor(n: number) {
    this.list = Array.from({ length: n });
  }

  public insert(id: number, value: string): string[] {
    const chunk = [];

    this.list[id - 1] = value;

    while (this.list[this.pointer]) {
      chunk.push(this.list[this.pointer]);
      this.pointer += 1;
    }

    return chunk;
  }
}
