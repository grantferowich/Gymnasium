/*


Swap list nodes: create a method which swaps the first occurrence
of the locations of two nodes in the linked list

example: 
swap(head, 5, 10)

(1) => (5) => (7) => (10)

(1) => (10) => (7) => (5)

// assume access to SinglyLinkedListNode class 
*/

const swapNodes = (head, a, b) => {

    // init a node at the spot before the head node
    // init the node with value null and init a pointer from that node to the head
    let ph = new SinglyLinkedListNode(null)
    ph.next = head;

    // a,b, parent(a), parent(b)
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
        if (current.data === a){
            currentA = current;
            parentA = parent;
        }
        // hunt for b
        if (current.data === b){
            currentB = current;
            parentB = parent;
        }
        // move current over the linked list 
        current = current.next;
        // move the parent over the linked list
        parent = parent.next;
    }
    if (currentA === undefined || currentB === undefined){
        return ph.next;
    }
    parentB.next = currentA;
    parentA.next = currentB;
    let ref = currentA.next;
    currentA.next = currentB.next;
    currentB.next = ref;
}
