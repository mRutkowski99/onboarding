import * as dayjs from 'dayjs';

export abstract class Cache<T> {
  constructor(private readonly _storageTime: number) {}

  protected data: CacheData<T> | undefined;

  abstract store(data: T): void;
  abstract get(): T | null;

  public get hasValue(): boolean {
    return this.data !== undefined && !this.hasExpired;
  }

  private get hasExpired(): boolean {
    if (this.data === undefined) return true;

    return dayjs().isAfter(
      dayjs(this.data.storedAt).add(this._storageTime, 'seconds')
    );
  }
}

export class CacheData<T> {
  readonly storedAt: Date;

  constructor(public readonly value: T) {
    this.storedAt = new Date();
  }
}
