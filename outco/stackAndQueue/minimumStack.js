/* 
MINIMUM STACK

Describe a stack data structure that supports "push", "pop", and "findminimum"
operations. "Findminimum" returns the smallest element in the stack.
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

class MinimumStack{
    constructor()
}