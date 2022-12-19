/* 217 - Linked List to Queue
Implement a Linked List data structure with addToTail and removeFromHead methods.

Then use that Linked List data structure to implement a Queue data structure with 
enqueue and dequeue methods.
 */


class ListNode {
    constructor(value){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = head;
        this.tail = tail;
        this.length = length;
    };

    // addToTail(value){

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

    // } 
}

let head1 = new ListNode(1);
head1.next = new ListNode(1);
head1.next.next = new ListNode(12);
head1.next.next.next = new ListNode(1);

let ll = new LinkedList()
ll.head = head1;
console.log(ll)