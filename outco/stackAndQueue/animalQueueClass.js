/* 

ANIMAL SHELTER (QUEUE)
CTCI 3.6 

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

class QueueNode{
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class AnimalQueue{
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
        if (value !== 'dog' && value !== 'cat'){ throw new Error('\nInvalid input'.red)}

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
    dequeueAny(){
        const data = this.first.data 
        this.first = this.first.next
        return data
    }

    dequeueDog(){
        let current = this.first
        while (current !== null){

        }
    }

}

let q = new AnimalQueue()
q.enqueue('dog')
