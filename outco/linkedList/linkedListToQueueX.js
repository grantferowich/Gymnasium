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
        this.linkedList.removeFromHead()
    }
}