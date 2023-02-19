/* 

    CTCI 3.4 : Queue Via Stacks
    Successfully tested the simple stack class 2/18/23.

    Reusable components: class Stack Node, class simple Stack 
    |--------------------------|
    | simple Stack             |
    |--------------------------|
    |* numberOfProperties === 1|
    |- top                     |
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
    |- enqueue(value)          | 
    |- isEmpty()               | 
    |- peek()                  | 
    |- dequeue()               | 
    ----------------------------

*/


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
    }

    pop(){
        if (this.top === null){ throw new Error('The stack is empty.')}
        let value = this.top
        this.top = this.top.next
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

    }

    isEmpty(){
        return this.top === null
    }
}

class QueueII{
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
        this.first = this.stack1.top
        this.last = this.stack2.top
    }

    isEmpty(){
        return this.first === null
    }
    peeK(){
        return
    }
}

let q2 = new QueueII()
const result = q2.isEmpty()
console.log(result)