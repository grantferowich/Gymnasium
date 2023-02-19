/*  
    SORTED STACK CLASS
    CTCI Chapter 3.5
    Successfully tested the class ______.
    
    |--------------------------|
    |   Stack Node             |
    |--------------------------|
    |* numberOfProperties === 2|
    |- data                    |
    |- next                    |
    |--------------------------|
    
    |--------------------------|
    | sorted Stack             |
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
        return this.top !== null ? this.top.data : 'The stack is empty.'
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

class SortedStack{
    constructor(){
        this.mainStack = new Stack()
        this.tempStack = new Stack()
    }

    pop(){
        if (this.top === null){ throw new Error('The stack is empty.')}
        let value = this.mainStack.pop().data
        return value
    }

    peek(){
        return this.top !== null ? this.top : 'The stack is empty.'
    }

    push(value){
        // connect the new stack node to the current top
        if (this.mainStack.size === 0){
            this.mainStack.push(value)
            return
        }

        if (value <= this.stack1.top.data){
            this.stack1.push(value)
            return
        }
        if (value > this.stack1.top.data){
            while (value > this.stack1.peek() && !this.stack1.isEmpty()){
                let popped = this.stack1.pop()
                this.temp.push(popped.data)
            }
            this.stack1.push(value)
            while (!this.temp.isEmpty()){
                let temp = this.temp.pop().data
                this.stack1.push(temp)
            }
            return
        }
    }

    isEmpty(){
        return this.stack1.top.data === null
    }
}
/* TESTS */
let s = new SortedStack()
s.push(5)
// let popped = s.pop()
// console.log(popped)
s.push(11)
// s.push(23)
console.log(s)
// s.push(3)
// s.push(11)
// console.log(s)
// console.log(s.stack1.top.next)
// console.log(s.stack1.next)
// console.log(s.