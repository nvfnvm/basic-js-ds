const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
  this.head = null;
  this.length = 0;
  }
  
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new Node(value)
    if(!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(value);
    }
    this.length++;
  }

  dequeue() {
    let temp = this.head.value;
    this.head = this.head.next;

    return temp;
  }
}

module.exports = {
  Queue
};
