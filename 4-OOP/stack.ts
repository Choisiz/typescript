interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type stackNode = {
  value: string;
  next?: stackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head: stackNode | undefined;
  get size() {
    return this._size;
  }
  push(value: string): void {
    const node = { value, next: this.head }; //m,u //r,m //h,r
    this.head = node; //m //r //h
    this._size += 1;
  }
  pop(): string {
    if (this.head == null) throw new Error("스택이 비었다");
    const node = this.head; //h,r
    this.head = node.next; //r
    this._size -= 1;
    return node.value;
  }
}

//단일연결리스트
const stack = new StackImpl();
stack.push("messi 10");
stack.push("ronaldo 7");
stack.push("haaland 9");

while (stack.size !== 0) {
  console.log(stack.pop());
}
