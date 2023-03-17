/* 

    CTCI 3.4 : Queue via Stacks
    Successfully tested Queue via Stacks 2/19/23.

    Reusable components: class Stack Node and class simple Stack.
    |--------------------------|
    | simple Stack             |
    |--------------------------|
    |* numberOfProperties === 1|
    |- top                     |
    |- size                    |
    |--------------------------|
    |* numberOfMethods === 4   |
    |- push(value)             | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- pop()                   | 
    ----------------------------

    |--------------------------|
    |   Stack Node             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- data                    |
    |- next                    |
    |--------------------------|

    |--------------------------|
    | QueueII                  |
    |--------------------------|
    |* numberOfProperties === 2|
    |- first                   |
    |- last                    |
    |- stack1                  |
    |- stack2                  |
    |--------------------------|
    |* numberOfMethods === 4   |
    |- size                    |
    |- shiftStacks()           |
    |- enqueue(value)          | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- dequeue()               | 
    ----------------------------

*/


require('colors');

// console.log(('\nThis is a success message.'.green))
// console.log(('\nThis is an error message.'.red))
// console.log('\nThis is a yellow warning message.'.yellow)

class StackNode{
    constructor(data=null){
        this.data = data;
        this.nIntext = null;
    }
}

class Stack{
    constructor(){
        // top will be a node
        this.top = null
        this.size = 0
    }

    pop(){
        if (this.top === null){ throw new Error('The stack is empty.')}
        let value = this.top
        this.top = this.top.next
        this.size--
        return value
    }

    peek(){
        return this.top !== null ? this.top : 'The stack is empty.'
    }
    push(value){
        let xNode = new StackNode(value)
        // connect the new stack node to the current top
        xNode.next = this.top
        // set the top node as a new node 
        this.top = xNode
        this.size++

    }

    isEmpty(){
        return this.top === null
    }
}

class QueueII{
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    /* 
    Time complexity: O(1)
    Space complexity: O(1)
    */
    size(){
        return this.stack1.size + this.stack2.size
    }

    /* 
    Time complexity: O(1)
    Space complexity: O(1)
    */
    isEmpty(){
        return this.size() === 0
    }

    /* 
    Time complexity: O(N)
    Space complexity: O(N)
    */
    shiftStacks(){
        if (this.stack2.size === 0){
            while (this.stack1.size !== 0){
                let popped = this.stack1.pop()
                this.stack2.push(popped)
            }
        }
    }

    /* 
    Time complexity: O(N)
    Space complexity: O(N)
    */
    peek(){
        if (this.isEmpty()) { return 'Cannot peek when the stack is empty'.red}
        this.shiftStacks()
        let peekValue = this.stack2.top.data.data
        return peekValue
    }
    
    /* 
    Time complexity: O(1)
    Space complexity: O(1)
    */
    enqueue(value){
        this.stack1.push(value)
    }
    
    /* 
    Time complexity: O(N)
    Space complexity: O(N)
    */
    dequeue(){
        this.shiftStacks();
        let lastElement = this.stack2.pop().data
        return lastElement.data
    }
}

let q2 = new QueueII()
// console.log(q2.size()) // ok
q2.enqueue(11)
q2.enqueue(23)
q2.enqueue(34)
// let last = q2.dequeue()
// console.log(last)
console.log(q2.peek()) // 11 