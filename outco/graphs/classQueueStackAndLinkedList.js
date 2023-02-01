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
        } else {
            // set the tail to be the new node 
            this.tail.next = node;
            this.tail = node;  
        }
        this.length++
        return;
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

    removeFromTail(){
        if (this.length === 0){
            return 'stack underflow'
        }
        if (this.length === 1){
            let deleted = this.head
            this.tail = null;
            this.head = null
            this.length--;
            return deleted;

        }
        if (this.length > 1){
            let prev = this.head;
            let deleted = this.tail;
            for (let x = 0; x < this.length - 2; x++){
                prev = prev.next;
            }
            this.tail = prev;
            prev.next = null;
            this.length--;
            return deleted;
        }
        this.length--;
    }

    contains(value){
        let current = this.head;
        while (current){
            if (current.value === value){
                return true
            }
            current = current.next
        }
        return false;
    }
}

class Queue {
    constructor(){
        // instantiate a queue as an instance of a linked list
        this.linkedlist = new LinkedList();
    }

    enqueue(value){
        //add element to end of linked list
        this.linkedlist.addToTail(value);
    }

    dequeue(){
        // remove element from end of linked list
        let firstElement = this.linkedlist.removeFirstNode();
        if (firstElement){
            return firstElement.value;
        } else {
            return null;
        }
    }
    contains(x){
        let current = this.linkedlist.head
        while (current){
            if (current.value === x){
                return true
            }
            current = current.next
        }
        return false
    }
}

class Stack{
    constructor(){
        this.linkedList = new SinglyLinkedList()
    }
    push(value){
        this.linkedList.addToTail(value)
    }
    pop(){
        let node = this.linkedList.removeFromTail();
        return node;
    }
}