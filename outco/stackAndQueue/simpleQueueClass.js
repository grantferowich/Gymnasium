/*  
    QUEUE CLASS
    CTCI Chapter 3 Warm Up

    |--------------------------|
    | simple Queue             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- first                   |
    |- last                    |
    |--------------------------|
    |* numberOfMethods === 4   |
    |- enqueue(value)          | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- dequeue()               | 
    ----------------------------

    |--------------------------|
    |   Queue node             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- data                    |
    |- next                    |
    |--------------------------|
*/

class QueueNode{
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        // first and last will be nodes
        this.first = null;
        this.last = null
    }

    isEmpty(){
        return this.first === null;
    }
    peek(){
        if (this.first){
            return this.first.data
        }
        return 'Error: When attempting to peek, the queue was in fact empty.'
    }
    enqueue(value){
        if (value === undefined || value === null){ return 'input value undefined'}
        let qNode = new QueueNode(value);
        if (this.first === null){
            console.log('enqueue case1..')
            this.first = qNode
            return true
        }
        if (this.first && !this.last){
            console.log('enqueue case2..')
            this.first.next = qNode
            this.last = qNode
            return true
        } 
        if (this.first && this.last){
            console.log('enqueue case3..')
            this.last.next = qNode
            this.last = qNode
            return true
        }

    }
    dequeue(){

    }

}
/* TESTS */
let q = new Queue()
// console.log(q.enqueue(undefined))
console.log(q)
// q.enqueue(11)
// q.enqueue(23)
// console.log(q)
// console.log(q.peek()) // 11
// console.log(q.isEmpty()) // false
// console.log(q.isEmpty()) 