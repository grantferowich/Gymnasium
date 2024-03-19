/* 

ANIMAL SHELTER (QUEUE)
CTCI 3.6 
Successfully tested the class 2/19/23.

Reusable components: List Node and Linked List. 

    |--------------------------|
    | Animal Queue             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- first                   |
    |- last                    |
    |--------------------------|
    |* numberOfMethods === 4   |
    |- enqueue(value)          | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- dequeueAny()            |       
    |- dequeueDog()            |
    |- dequeueCat()            |
    ----------------------------

    |--------------------------|
    |   Queue node             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- data                    |
    |- next                    |
    |--------------------------|
*/

require('colors');

class ListNode {
    constructor(value){
        this.value = value;
        this.nIntext = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    append(value){
        this.insert(value, this.length)
    }

    prepend(value){
        this.insert(value, 0)
    }

    insert(value, index){
        if (index < 0 || index > this.length){
            return;
        }
        let xNode = new ListNode(value);
        if (this.length === 0){
            this.head = xNode;
            this.tail = xNode;
        } else if (index === 0){
            xNode.next = this.head;
            this.head = xNode;
        } else if (index === this.length){
            this.tail.next = xNode;
            this.tail = xNode;
        } else {
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            xNode.next = prev.next;
            prev.next = xNode;
        }
        this.length++
    }
   
    remove(index){
        if (index < 0 || index >= this.length) { return; }
        let result;
        if (this.length === 1){
            result = this.head;
            this.head = null;
            this.tail = null;
        } else if ( index === 0){
            result = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let x = 0; x < index - 1; x++){
                prev = prev.next;
            }
            result = prev.next;
            prev.next = prev.next.next;
            if (index === this.length - 1){
                this.tail = prev;
            }
        }
        this.length--;
        return result;
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
        this.length = 0;
    }

    peek(){
        return this.linkedlist.head.value;
    }

    enqueue(value){
        if (value !== 'dog' && value !== 'cat'){ throw new Error('\nInvalid input'.red)}
        this.length++;
        //add element to end of linked list
        this.linkedlist.append(value);
    }

    dequeueAny(){
        if (this.length === 0){
            return 
        }
        this.length--;
        // remove element from end of linked list
        let firstElement = this.linkedlist.remove(0).value;
        if (firstElement){
            return firstElement;
        } else {
            return null;
        }
        
    }

    dequeueDog(){
        let current = this.linkedlist.head;
        let index = 0;
        while (current !== null){
            if (current.value === 'dog'){
                this.linkedlist.remove(index);
                return 'dog';
            }
            index++;
            current = current.next;
        }
        return 'No dogs are available in the queue.';
    }

    dequeueCat(){
        let current = this.linkedlist.head;
        let index = 0;
        while (current !== null){
            if (current.value === 'cat'){
                this.linkedlist.remove(index);
                return 'cat';
            }
            index++;
            current = current.next;
        }
        return 'No cats are available in the queue.';
    }
}

let q = new Queue()
q.enqueue('cat')
// let c = q.dequeueCat()
let d = q.dequeueDog()
console.log(d)

