/* 

    Stack CLASS
    CTCI Chapter 3 Warm Up
    Successfully tested the simple stack class 2/18/23.
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

// let stack = new StackNode(1)
// stack.next = new StackNode(2)
let stack = new Stack()
let stack0 = new Stack()
// console.log(stack)
// console.log(stack.pop()) // empty stack exception 
// stack.push(11)
// stack.push(23)
// console.log(stack)
// console.log(stack.top.data)
// console.log('popping...',stack.pop())
// console.log(stack.top)
// console.log(stack)
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack0.isEmpty())
// console.log(stack)
// console.log(stack.top)
// console.log(stack.top.data)
// stack.pop()
// console.log(stack)
// console.log(stack.isEmpty())
// stack.push(23)
// console.log(stack.peek())