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
    constructor(){
        this.minimumsStack = new Stack()
        this.allStack = new Stack()
    }
    
    minimumStackPeek(){
        return this.minimumsStack.top.data
    }
    push(value){
        this.allStack.push(value)
        let currentMinimum = this.minimumStackPeek()
        if (value < currentMinimum){
            this.minimumsStack.push
        }
  
    }
    pop(){
        let value = this.allStack.pop();
        let currentMinimum = this.minimumStackPeek()
        if (value === currentMinimum){
            this.minimumsStack.pop()
        }
        return value
    }
    findMinimum(){
        return this.minimumsStack.top.data
    }

}

const m = new MinimumStack()
m.push(3)
m.push(23)
m.push(2)
// console.log('// m', m)
console.log(m.findMinimum())