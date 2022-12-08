/*


Swap list nodes: create a method which swaps the first occurrence
of the locations of two nodes in the linked list

example: 
swap(head, 5, 10)

(1) => (5) => (7) => (10)

(1) => (10) => (7) => (5)
*/

const swapNodes = (head, a, b) => {

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
    while (current !== null){
        if (current.data === a){
            currentA = current;
            parentA = parent;
        }
        if (current.data === b){
            currentB = current;
            parentB = parent;
        }

        current = current.next;
        parent = parent.next;
    }
    console.log("current A", currentA);
    console.log("parentA ", parentA)
}
