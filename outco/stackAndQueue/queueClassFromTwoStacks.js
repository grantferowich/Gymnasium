/* 

    CTCI 3.4 : Queue Via Stacks
    Successfully tested the simple stack class 2/18/23.

    Reusable components: class Stack Node, class simple Stack 
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
    |- size
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
        this.next = null;
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
        this.first = null;
        this.last = null;
    }

    size(){
        return this.stack1.size + this.stack2.size
    }

    isEmpty(){
        console.log('isEmpty', this.first === null)
        return this.first === null
    }
    peek(){
        if (this.isEmpty()) { return 'Cannot peek when the stack is empty'.red}
        return
        // return this.first.data
    }
    enqueue(value){
        if (!this.isEmpty()){
            this.stack2.push(value)
            this.last = this.stack2.top.data
        }
        // if the queue is empty, push to stack 1
        if (this.isEmpty()){
            this.stack1.push(value)
            this.first = this.stack1.top.data
        }
    }
    dequeue(){
        if (this.isEmpty()){ return 'Cannot dequeue from an empty queue'.red}
        if (!this.isEmpty()){
            let element = this.stack1.pop().data
            let newTop = this.stack2.pop().data
            this.first = newTop
            this.stack1.push(newTop)
            return element
        }
    }
}

let q2 = new QueueII()
console.log(q2.size())