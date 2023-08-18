export type Subscription<T> = (value: T) => void;

export class SubState<T> {
  private value: T;
  constructor(initialValue: T) {
    this.value = initialValue;
  }

  get(): T {
    return this.value;
  }

  set(newValue: T): this {
    this.value = newValue;
    return this;
  }

  private subs: Set<Subscription<T>> = new Set();
  sub(sub: Subscription<T>): this {
    this.subs.add(sub);
    return this;
  }

  unsub(sub: Subscription<T>): this {
    this.subs.delete(sub);
    return this;
  }

  trigger(): this {
    for (const sub of this.subs) sub(this.value);
    return this;
  }
}
