// Z->A->B->C->D->X
// head -> A
// tail -> D
// length = 4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addAtBeginning(data) {
    let node = new Node(data);
    // A=>
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  addAtEnd(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      //A=>B
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // A->B->C
  // head - A -> B
  // tail - C -> C
  // length - 3 -> 2
  // B-> C
  deleteAtBeginning() {
    if (this.head == null) {
      console.log("List is empty");
    } else {
      //   const temp = this.temp;
      this.head = this.head.next;
      this.length--;
      //   free/delete temp;
    }
  }

  deleteAtEnd() {
    if (this.head == null) {
      console.log("List is empty");
    } else {
      let temp = this.head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      this.tail = temp;
      this.tail.next = null;
      this.length--;
    }
  }

  // A->B->C->D->E
  // head -> A
  // tail -> E
  print() {
    let temp = this.head;
    let str = "";
    while (temp != null) {
      str = str + temp.data + "->";
      temp = temp.next;
    }
    console.log(str);
  }

  getAtIndex(index) {
    let currentIndex = 0;
    let temp = this.head;

    while (currentIndex < index) {
      temp = temp.next;
      currentIndex++;
    }

    console.log("getAtIndex", temp.data);
    return temp.data;
  }
}

let linkedList = new LinkedList();
linkedList.addAtEnd("A");
linkedList.addAtEnd("B");
linkedList.addAtEnd("C");
linkedList.addAtEnd("D");
// linkedList.deleteAtBeginning();
// linkedList.deleteAtEnd();
linkedList.print();
linkedList.getAtIndex(2);
