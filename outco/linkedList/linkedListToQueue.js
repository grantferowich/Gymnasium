/* 217 - Linked List to Queue
Implement a Linked List data structure with addToTail and removeFromHead methods.

Then use that Linked List data structure to implement a Queue data structure with 
enqueue and dequeue methods.




// traverse from the start of the linked list 
// until the end of the linked list
// set the old tail to point at the new node
// making the new node the tail
// special cases for linked lists
// first find the length of the linked list
// 1. if the length is 0
// then adding the node means the new node is the head and then tail\
// 2. If the length is 1, then the head points at the new node as the tail
// if the linked list length is equal to or greater than 2
// traverse until reaching the tail which points to null
 */
    



class ListNode {
    constructor(value){
        this.value = value;
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
            return
        }
        this.tail.next = node;
        this.tail = node;  
        this.length++;
        return;
    } 

    removeLastNode(){
        if (this.head === null){
            return
        }
        let root = this.head
        this.head = this.head.next;
        // hunt for the node which will become the tail
        if (this.head === null){
            this.tail = null;
        }
        // remove the tail by severing the reference
        this.length--;
        return root;
        
    }
}

// const head1 = new ListNode(1);
// console.log(head1)
// console.log(head1.tail)
// head1.next = new ListNode(9);
// head1.next.next = new ListNode(12);
// head1.next.next.next = new ListNode(13);


// const ll = new LinkedList()
// ll.head = head1;
// ll.tail = head1.next.next.next
// console.log(`Before appending the linked list length: ${ll.length()}.` )
// ll.addToTail(4)
// console.log(ll)
// console.log('After calling .addToTail the linked list length is: ', ll.length())
// To go the extra mile implement the .length method using recursion.

const ll2 = new LinkedList();

ll2.addToTail(2)
console.log('ll2 head', ll2.head)
console.log('ll2 tail', ll2.tail)
// ll2.addToTail(22)
// ll2.addToTail(23)


// console.log('ll2 length before removal', ll2.length)

// console.log(ll2.length()) // expected output: 1
// console.log('ll2.length: ', ll2.length)
// console.log('ll.tail: ', ll.tail)
// console.log("ll before: ", ll)

ll2.removeLastNode()

// console.log('ll.length ', ll.length())
// console.log('ll.tail ', ll.tail)

// console.log('ll2 length after removal', ll2.length) 

// console.log("ll after: ", ll)
// console.log('list after removal', ll2)

// ll2.addToTail(3)

// ll2.addToTail(3)
// console.log('ll2', ll2)

ll2.addToTail(9)
// console.log(ll2.length)
// console.log('ll2', ll2)

// console.log('ll2 length after additional changes', ll2.length())