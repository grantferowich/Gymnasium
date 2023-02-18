class StackNode{
    constructor(data=null, top=null){
        this.data = data;
        this.next = null;
        this.top = top
    }
}


class Stack{
    constructor(){
        this.top = null
    }

    pop(){
        if (this.top === null){ return 'empty stack exception'}
    }

    push(value){
        this.top = value;

    }
}

// let stack = new StackNode(1)
// stack.next = new StackNode(2)
let stack = new Stack()
// console.log(stack)
console.log(stack.pop()) // empty stack exception 