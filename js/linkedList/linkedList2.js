class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.front = null;
    this.tail = null;
    this.size = 0;
  }

  insertFront(data) {
    let nodeIn = new Node(data);
    if (this.front === null) {
      this.front = nodeIn;
      this.tail = nodeIn;
    } else {
      nodeIn.next = this.front;
      this.front = nodeIn;
    }
    this.size++;
  }

  insertAnyWhere(data, index) {
    if (index > this.size) {
      console.log("OverFlow");
    } else {
      if (index === 0) {
        this.insertFront(data);
      } else {
        if (index === this.size) {
          this.insertAtEnd(data);
        }
        //index = 2 data = F
        let i = 0;
        let holder = this.front;

        while (i < index - 1) {
          holder = holder.next; //B
          i++;
        }
        let newNode = new Node(data);
        holder.next = newNode; //B->F->A->D->E->

        // if (newNode.next === null) {
        //   this.tail = newNode;
        //   this.size++;
        // }
        this.size++;
      }
    }
  }
  insertAtEnd(data) {
    let node = new Node(data);
    if (this.front === null) {
      this.front = node;
      this.tail - node;
    } else {
      //A->B
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  print() {
    let temp = this.front;
    let str = "";
    while (temp != null) {
      str += temp.data + "->";
      temp = temp.next;
    }
    console.log(str);
  }
}

let link = new LinkedList();
link.insertFront("A");
link.insertFront("B");
link.print();
link.insertAtEnd("D");
link.print();
link.insertAnyWhere("C", 0);
link.print();
link.insertAnyWhere("E", 4);
link.print();
link.insertAnyWhere("F", 2);
link.print();
