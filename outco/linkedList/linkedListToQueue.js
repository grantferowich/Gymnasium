/* 217 - Linked List to Queue
Implement a Linked List data structure with addToTail and removeFromHead methods.

Then use that Linked List data structure to implement a Queue data structure with 
enqueue and dequeue methods.
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
    };

    // method to take in the head as param
    // and return the length as a property of the linked list class
    length(){
        let current = this.head;
        let length = 0;
        while (current !== null){
            length++;
            current = current.next;
        }
        return length;
    }

    addToTail(value){

    //     //traverse from the start of the linked list 
    //     // until the end of the linked list
    //     // set the old tail to point at the new node
    //     // making the new node the tail

    //     // special cases for linked lists
    //     // first find the length of the linked list
    //     // 1. if the length is 0
    //     // then adding the node means the new node is the head and then tail\
    //     // 2. If the length is 1, then the head points at the new node as the tail
    //     // if the linked list length is equal to or greater than 2
    //     // traverse until reaching the tail which points to null

    //     let length = 0;
    //     let current = head

    } 
}

const head1 = new ListNode(1);
head1.next = new ListNode(9);
head1.next.next = new ListNode(12);
head1.next.next.next = new ListNode(13);


const ll = new LinkedList()
ll.head = head1;
ll.tail = head1.next.next.next
console.log(`The linked list length: ${ll.length()}.` )
// To go the extra mile implement the .length method using recursion.
