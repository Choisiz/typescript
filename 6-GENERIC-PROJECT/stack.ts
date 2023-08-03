{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type stackNode<T> = {
    readonly value: T;
    readonly next?: stackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: stackNode<T>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T): void {
      if (this.size === this.capacity) throw new Error("스택 풀");
      const node = { value, next: this.head };
      this.head = node;
      this._size += 1;
    }
    pop(): T {
      if (this.head == null) throw new Error("스택이 비었다");
      const node = this.head;
      this.head = node.next;
      this._size -= 1;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push("messi 10");
  stack.push("ronaldo 7");
  //stack.push(10);

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
