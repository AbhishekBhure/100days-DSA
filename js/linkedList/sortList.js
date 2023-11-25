const Node = {
  constructor() {
    this.value = value;
    this.null = null;
  },
};

let head = new Node(4);
head.next = new Node(2);
head.next.next = new Node(1);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(6);
