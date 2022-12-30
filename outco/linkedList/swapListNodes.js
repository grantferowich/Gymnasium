/*


Swap list nodes: create a method which swaps the first occurrence
of the locations of two nodes in the linked list

example: 
swap(head, 5, 10)

(1) => (5) => (7) => (10)

(1) => (10) => (7) => (5)

// assume access to SinglyLinkedListNode class 
*/

class SinglyLinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
let head = new SinglyLinkedListNode(1);
head.next = new SinglyLinkedListNode(5);
head.next.next = new SinglyLinkedListNode(7);
head.next.next.next = new SinglyLinkedListNode(10)


const swapNodes = (head, a, b) => {
    // init a node at the spot before the head node
    // init the node with value null and init a pointer from that node to the head
    let ph = new SinglyLinkedListNode(null)
    ph.next = head;

    let currentA;
    let parentA;

    let currentB;
    let parentB;

    let current = head; 
    let parent = ph;
    // move from the node to the chronologically last null
    // current is the state value keeping track of the present value of the node
    // during the traversal
    // the parent will also be tracked during the traversal
    while (current !== null){
        // hunt for a
        if (current.value === a){
            currentA = current;
            parentA = parent;
        }
        // hunt for b
        if (current.value === b){
            currentB = current;
            parentB = parent;
        }
        // move current over the linked list 
        current = current.next;
        // move the parent over the linked list
        parent = parent.next;
    }
    parentA.next = currentB;
    parentB.next = currentA;
    currentA.next = currentB.next;
    currentB.next = currentA.next;
    return head;
}
console.log(swapNodes(head, 5, 7)) // 1-7-5-10
// 1 -> 5 -> 6 -> 7 -> 10
// parentA: 1
// currentA: 5
// parentB: 6
// currentB: 7
