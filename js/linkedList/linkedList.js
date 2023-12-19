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

  insertAtEnd(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  insertAnyWhere(data, index) {
    if (index > this.length) {
      console.log("OverFlow");
    } else {
      if (index === 0) {
        this.insertAtBeginning(data);
      } else {
        let i = 0;
        let holder = this.head;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        let newNode = new Node(data, holder.next);
        holder.next = newNode;

        // If inserting at the end, update the tail
        if (newNode.next === null) {
          this.tail = newNode;
        }
        this.length++;
      }
    }
  }

  insertAtBeginning(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  deleteAtEnd() {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
      temp.next = null;
      temp.tail = temp;
      this.length--;
    }
  }

  deleteAtBeginning() {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      this.head = this.head.next;
      this.length--;
    }
  }

  getAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let temp = this.head;
      let count = 0;
      while (count < index) {
        temp = temp.next;
        count++;
      }
      return temp.data;
    }
  }

  getMid() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow.data;
  }

  print() {
    let temp = this.head;
    let str = "";
    while (temp !== null) {
      str += temp.data + " -> ";
      temp = temp.next;
    }
    str += "null";
    console.log(str);
  }
}

let list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(0);
list.print();
// console.log(list.getAt(1));
console.log(list.getMid());

// list.deleteAtEnd();
// list.print();
// list.insertAtBeginning(0);
// list.print();
// list.deleteAtBeginning();
// list.print();

module.exports = { LinkedList, Node };
