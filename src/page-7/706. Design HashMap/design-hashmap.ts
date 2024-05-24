export class HashMap {
  public map: object = {};

  public put(key: number, value: number): void {
    this.map[key] = value;
  }

  public get(key: number): number {
    return this.map[key] || -1;
  }

  public remove(key: number): void {
    delete this.map[key];
  }
}
