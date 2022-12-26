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

const swap = (head, a, b) => {

    if (!head || a === b) { return head;}
    
    const search = (node, target) => {
        let prev = null;
        let current = node;

        while (current){
            if (current.value === target){
                return [prev, current];
            }
        }
        prev = current;
        current = current.next;
        return [null, null];
    }

    let [parentA, currentA] = search(head, a);
    let [parentB, currentB] = search(head, b);
    if (!currentA || !currentB){ return head; }
    if(parentA){
        parentA.next = currentB;
    }
    if(parentB){
        parentB.next = currentA;
    }
    [currentA.next, currentB.next] = [currentB.next, currentA.next]
    if(parentA === null){ return currentB}
    if(parentB === null){ return currentA}
    return head;
}

console.log(swap(head, 10, 1))