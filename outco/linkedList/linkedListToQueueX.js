/**
 * These three classes were successfully tested on 12/31/2022.
 * 
 * No input or output cases. Instead, upon implementation of the Linked List, and
then Queue class, you should be able to run the following commands.


ll = instance of Linked List class.

ll.addToTail(1)
ll.addToTail(5)
ll.addToTail(7)
ll.addToTail(10)

print out ll.removeFromhead() => 1
print out ll.removeFromhead() => 5
print out ll.removeFromhead() => 7
print out ll.removeFromhead() => 10

Same thing should be accomplished with the Queue as well


q = instance of Queue class.

q.enqueue(1)
q.enqueue(5)
q.enqueue(7)
q.enqueue(10)

print out q.dequeue() => 1
print out q.dequeue() => 5
print out q.dequeue() => 7
print out q.dequeue() => 10
 * 
 * 
 * 
 *  */

class SinglyLinkedListNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // special cases: 
    // when length is 0 or 1
    addToTail(value){
        let newNode = new SinglyLinkedListNode(value)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        if (this.length === 1){
            this.tail = newNode;
            this.head.next = newNode;
        }
        if (this.length > 1){
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }

    // return the head node
    // special cases: 
    // when length is 0: return
    // when length is 1: reset head and tail pointers
    // when length is more than 1: reset head pointer 
    removeFromHead(){
        if (this.length === 0){
            return
        }
        if (this.length === 1){
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value
        }
        if (this.length > 1){
            let temp = this.head;
            this.head = this.head.next;
            return temp.value
        }
        this.length--;
    }
}

class Queue{

    constructor(){
        this.linkedList = new SinglyLinkedList();
    }
    enqueue(value){
        this.linkedList.addToTail(value)
    }
    dequeue(){
        let node = this.linkedList.removeFromHead()
        return node
    }   
}




let q = new Queue
q.enqueue(1)
q.enqueue(5)
q.enqueue(7)
q.enqueue(10)
// console.log(q)

console.log(q.dequeue()); // 1 
console.log(q)
