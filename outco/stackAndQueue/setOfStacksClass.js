
require('colors');

// console.log(('\nThis is a success message.'.green))
// console.log(('\nThis is an error message.'.red))
// console.log('\nThis is a yellow warning message.'.yellow)
/* 
    class SetOfStacks

        - d.s. should support several stacks (-numberOfStacks)
        - d.s. should create a stack when a previous stack exceeds capacity (ExpandStacks)
        - d.s. should support push(x) and pop() s.t. SetOfStacks.pop() returns the
        same value as if all the values were in one stack (.pop())

        /// follow up
        - d.s. should support .popAt(stackNum) which performs a pop on the specified
        stack number

    |--------------------------|
    | SetOfStacks              |
    |--------------------------|
    |* numberOfProperties === 4|
    |- stackCapacity           |    - elements per stack
    |- numberOfStacks          |    - literally, stacks in SetOfStacks
    |- values                  |    - elements of stack: stackCapacity * NumberOfStacks
    |- sizes                   |    - max number of elements per stack
    |--------------------------|
    |* numberOfMethods === 6   |
    |- isFull(stackNum)        | x
    |- indexOfTop(stackNum)    | x
    |- push(value)             | x
    |- isEmpty(stackNum)       | x
    |- peek(stackNum)          | 
    |- pop()                   | 
    |- expandNumberOfStacks()  |
    |--------------------------|
*/

class SetOfStacks{
    constructor(stackCapacity=1){

        if (stackCapacity === undefined){ throw new Error('Error: Stack capacity and number of stacks must be defined.'.red) }
        // info about the SetOfStacks class itself
        this.stackCapacity = stackCapacity;
        // info about about the values in the stack
        this.elementsInSetOfStacks = new Array(this.stackCapacity).fill(0);
        this.stacksInSet = 1
        this.elementsPerSubStack = new Array(this.stackCapacity).fill(0) 

    }

    actualNumberOfElements(){
        let actualNumberOfElements = 0;
        let x = 0;
        while (x < this.elementsPerSubStack.length){
            actualNumberOfElements += this.elementsPerSubStack[x];
            x++
        }
        return actualNumberOfElements;
    }
    totalCapacity(){
        return this.stacksInSet * this.stackCapacity
    }
    // info about the values in the stack
    isFull(){
        return this.actualNumberOfElements() === this.totalCapacity()
    }

    // info about the values in the stack
    isEmpty(){
        return this.actualNumberOfElements() === 0;
    }

    push(value){
        console.log('pushing val', value)
        if (this.isFull()){
            console.log('isFull = true')
            // expand number of stacks
            this.stacksInSet++
            console.log('this.stacksInSet increased to', this.stacksInSet)
            let newStack = new Array(this.stackCapacity).fill(0)
            this.elementsInSetOfStacks.concat(newStack)
        }
        this.elementsInSetOfStacks.push() = value;
        return
    }
}

// let sos = new SetOfStacks(1,3)
let sos = new SetOfStacks()
// console.log(sos)
console.log(sos.isEmpty()) // true
// console.log(sos)
// console.log(sos.isEmpty(1)) // true
// console.log(sos.isFull(1)) // true
// console.log(sos)
// sos.push(1)
// console.log(sos)