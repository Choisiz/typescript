interface Queue {
  size: number;
  push(value: string): void;
  shift(): string;
}

type queueNode = {
  value: string;
  next?: queueNode;
};

class QueueImpl implements Queue {
  private _size: number = 0;
  private head: queueNode | undefined;
  private tail: queueNode | undefined;
  get size() {
    return this._size;
  }
  push(value: string): void {
    const node = { value };
    if (this.head == null) {
      //아무것도 없을때
      this.head = node;
      this.tail = node;
    } else {
      //큐에 값이 있을때
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
    this._size += 1;
  }

  shift(): string {
    if (this.head == null) throw new Error("큐가 비었습니다.");
    const node = this.head;
    this.head = node.next;
    this._size -= 1;
    return node.value;
  }
}

const queue = new QueueImpl();
queue.push("messi");
queue.push("ronaldo");
queue.push("haaland");

//while (queue.size !== 0) {
//  console.log(queue.shift());
//}
