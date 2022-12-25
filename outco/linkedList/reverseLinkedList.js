/*
initial:
1 => 5 => 7 => 10 => null

reverse:
null <= 1 <= 5 <= 7 <= 10


// when current is 1, set current.next = null

Space complexity: constant O(1)
As input grows only three variables are required, whether there are 5 or 500,000 elements

Successfully tested the function on 12/25/22.
*/



class ListNode {
    constructor(value = null) {
     this.value = value
     this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    addToTail(value){
        let node = new ListNode(value);
        // if this.tail is null then the linked list must not be populated
        if (this.tail === null){
            this.head = node;
            this.tail = node;
        } else {
            // set the tail to be the new node 
            this.tail.next = node;
            this.tail = node;  
        }
        this.length++;
    } 

    removeFirstNode(){
        if (this.head === null){
            return
        }
        let root = this.head;
        this.head = this.head.next;
        this.length--;
        return root;
    }

    removeLastNode(){
        if (this.head === null){
            return;
        }
        // if LL is one node delete the node and return it
        if (this.head === this.tail){
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }
        let currentNode = this.head;
        // traverse to the second to last node
        while (currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        let returnNode = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        this.length--;
        return returnNode
    }

    insertAtPosition(value, position){

        // validate insertion location
        if (position < 0 || position > this.length){
            throw new Error('Invalid insertion position')
        }

        let newNode = new ListNode(value);

        // when 0 is the insertion location
        // init pointer from newNode to the current head
        // reassign the head as the newNode
        if (position === 0){
            newNode.next = this.head;
            this.head = newNode;
            this.length++
            return
        }
        // suppose 1-3-5 and want to insert value 2 at position 2
        // the new list wouold 1-3-2-5
        // iterate over to position 1
        // set the node's pointer at position 1 to 2
        // set 2's pointer to 5
        let x = 0;
        let currentNode = this.head
        
        while (x < position - 1){
            currentNode = currentNode.next;
            x++
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return
    }
}

const reverseLinkedList = (node) => {

    let prev = null;
    let current = node;
    
    while (current !== null){
        // create reference to next node
        let ref = current.next;
        // reverse the arrow direction
        current.next = prev;
        // move the prev value over 1 spot
        prev = current;
        // move the current value over 1 spot
        current = ref;
    }

    return prev;
}

let x = new ListNode(1)
x.next = new ListNode(3)
x.next.next = new ListNode(5)

console.log(reverseLinkedList(x))
