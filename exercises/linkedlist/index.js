// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!this.head) {
      return null;
    }

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      //There are some existing node in our chain
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
      // The chain is empty
    }
  }

  getAt(integer) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (integer == counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // returns null if the size requested is greater than number of node || there is nothing in the 1st node
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const findPreviousNode = this.getAt(index - 1);
    if (!findPreviousNode || !findPreviousNode.next) {
      return;
    }
    findPreviousNode.next = findPreviousNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      return (this.head = new Node(data));
    }

    if (index === 0) {
      return (this.head = new Node(data, this.head));
    }

    const previous = this.getAt(index - 1) || this.getLast();

    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
