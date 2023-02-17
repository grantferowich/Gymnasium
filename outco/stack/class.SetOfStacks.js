
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
    constructor(stackCapacity, numberOfStacks){

        if (stackCapacity === undefined || numberOfStacks === undefined){ throw new Error('Error: Stack capacity and number of stacks must be defined.'.red) }
        this.stackCapacity = stackCapacity;
        this.numberOfStacks = numberOfStacks;
        this.values = new Array(this.stackCapacity * this.numberOfStacks).fill(0);
        this.sizes = new Array(this.numberOfStacks).fill(0)
    }



    indexOfTop(stackNum){
        return stackNum * this.stackCapacity + this.sizes[stackNum] - 1
    }

    isFull(stackNum){
        return this.sizes[stackNum] === this.stackCapacity
    }

    isEmpty(stackNum){
        return this.sizes[stackNum] === 0;
    }

    expandNumberOfStacks(){
        // handle increase in number of stacks
        this.numberOfStacks++
        // handle data about how many elements are in the stack
        this.sizes.push(0);
        // handle increase in values capacity
        this.values.concat(new Array(this.stackCapacity).fill(0))
    }

    pop(stackNum){
        this.sizes[stackNum]--
        this.values[this.indexOfTop(stackNum)] = 0;
    }

    // either the stack is already full or it can handle more elements
    // if the stack is already full and the stack is the last stack
        // -> invoke expandNumberOfStacks
    push(stackNum, value){
        //handle
        if (this.isFull(stackNum) && 
        this.sizes[stackNum]++;
        if (this.sizes[stackNum] > this.stackCapacity){

        }
        this.values[this.indexOfTop(stackNum)] = value;
    }
}

// let sos = new SetOfStacks(1,3)
let sos = new SetOfStacks(1,undefined)
// console.log(sos)
console.log(sos.isEmpty(1)) // true
console.log(sos.isFull(1)) // true
console.log(sos)