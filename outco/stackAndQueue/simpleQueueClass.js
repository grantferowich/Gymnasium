/*  
    QUEUE CLASS
    CTCI Chapter 3 Warm Up
    Successfully tested the class 2/18/23.
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

require('colors');

// console.log(('\nThis is a success message.'.green))
// console.log(('\nThis is an error message.'.red))
// console.log('\nThis is a yellow warning message.'.yellow)

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

    // Time complexity: O(1)
    // Space complexity: (1)
    isEmpty(){
        return this.first === null;
    }
    // Time complexity: O(1)
    // Space complexity: (1)
    peek(){
        if (this.first){
            return this.first.data
        }
        throw new Error('\nThe stack is empty.'.red)
    }
    // Time complexity: O(1)
    // Space complexity: (1)
    enqueue(value){
        
        if (value === undefined || value === null){throw new Error('\nInvalid input'.red)}
        
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
    // Time complexity: O(1)
    // Space complexity: (1)
    dequeue(){
        const data = this.first.data 
        this.first = this.first.next
        return data
    }

}
/* TESTS */
let q = new Queue()
// console.log(q.enqueue(undefined))
// console.log(q)
q.enqueue(11)
q.enqueue(23)
// console.log(q)
// console.log(q.peek()) // 11
// console.log(q.isEmpty()) // false
// console.log(q.isEmpty()) 

// console.log(q)
console.log(q.dequeue()) // 11
q.enqueue(34)
// q.enqueue(null)
// console.log(q)

let q2 = new Queue()
console.log(q2.peek())
