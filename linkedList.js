//Construct a linked list
//  The class should have 'head' and 'tail' properties, both pointing to null or to a node.
//Each node must have a "value", "next" and "prev" properties. "next" and "prev" can point to null or another node.
// The class should support:
//  + setting the head
//  + setting the tail
//  + inserting nodes before/after other nodes
//  + inserting a node at a certain position
//  + removing specific nodes
//  + removing all nodes with a specific value
//  + searching for a node with a specific value, and returning a boolean

// // This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    //this part of the implementation is tricky (???)
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    //how is it that the machine is removing from LL the node we are to insert?
    this.remove(nodeToInsert);

    //the node to insert points back to the node the machine is inserting after
    nodeToInsert.prev = node;
    //the new node inherits the forward pointer from the node it's inserting after
    nodeToInsert.next = node.next;

    //confusing node.next.prev usage again ??
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    //the machine tells the node it's using as ref point to insert after
    // "now your fordward pointer points to the new node"
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    //if the insertion position is node 1, then run setHead
    if (position === 1) {
        this.setHead(nodeToInsert){
            return;
        }
    }
    //what the heck . . .
    
    let node = this.head;
    let currentPosition = 1; 
    //traverse the list unil the node is the position we want the machine to insert at (?)
    while ( node !== null && currentPosition++ !== position) {
        node = node.next
    }
    if (node !== null) {
        this.insertBefore(node, nodeToInsert);
    } else {this.setTail(nodeToInsert)}
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while ( node !== null ) {
        const nodeToRemove = node;
        node = node.next;
        if (nodeToRemove.value === value) {this.remove(nodeToRemove)}
    }
  }

  remove(node) {
   if (node === this.head) this.head = this.head.next;
   if (node === this.tail) this.tail = this.tail.prev;
   this.removeNodeBindings(node);
   }

   //the search operation
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value ) node = node.next;
    return node !== null;
  }

  removeNodeBindings(node) {
      if (node.prev !== null) node.prev.next = node.next;
      if (node.next !== null) node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
  }
}
