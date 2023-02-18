class StackNode{
    constructor(data=null, top=null){
        this.data = data;
        this.next = null;
        this.top = top
    }
}


class Stack{
    constructor(){
        this.top = new StackNode()
    }

    pop(){
        if (this.top === null){ return 'empty stack exception'}
        let value = this.top.data
        this.top = this.top.next
        return value
    }

    peek(){
        return this.top.data
    }

    push(value){
        let xNode = new StackNode(value)
        this.top.next = this.top
        this.top = xNode

    }

    isEmpty(){
        return this.top.data === null
    }
}

// let stack = new StackNode(1)
// stack.next = new StackNode(2)
let stack = new Stack()
let stack0 = new Stack()
// console.log(stack)
// console.log(stack.pop()) // empty stack exception 
stack.push(11)
stack.push(23)
// console.log(stack)
// console.log(stack.top.data)
// console.log('popping...',stack.pop())
// console.log(stack.top)
// console.log(stack)
// console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack0.isEmpty())