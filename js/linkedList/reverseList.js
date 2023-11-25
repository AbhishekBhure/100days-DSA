class Node {
  constructor(data) {
    this.data = data;
    this.next - null;
  }
}

const insertAtBeginning = (node, head) => {
  node.next = head;
  return node;
};

const deleteAtBeginning = (head) => {
  if (head == null) return null;
  let temp = head.next;
  head.next = null;
  return temp;
};

const reverse = (head) => {
  let newHead = null;
  while (head != null) {
    let temp = head;
    head = deleteAtBeginning(head);
    newHead = insertAtBeginning(temp, newHead);
  }
  return newHead;
};

const print = () => {
  let str = "";
  let temp = head;
  while (temp != null) {
    str += temp.data + " -> ";
    temp = temp.next;
  }
  str += null;
  console.log(str);
};

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

head = reverse(head);
print(head);
