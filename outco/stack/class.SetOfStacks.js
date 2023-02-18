
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
        // info about the SetOfStacks class itself
        this.stackCapacity = stackCapacity;
        this.numberOfStacks = numberOfStacks;
        const size = this.stackCapacity * this.numberOfStacks;
        // info about about the values in the stack
        this.values = new Array(size).fill(0);
        this.sizes = new Array(numberOfStacks).fill(0)
    }

    // info about the values in a specific stack
    indexOfTop(stackNum){
        console.log(this.sizes)
        let offset = stackNum * this.stackCapacity 
        let size = this.sizes[stackNum]
        console.log('this.sizes', this.sizes)
        console.log('size',  size)
        return stackNum * this.stackCapacity + this.sizes[stackNum] - 1
    }

    // info about the values in the stack
    isFull(stackNum){
        return this.sizes[stackNum] === this.stackCapacity
    }

    // info about the values in the stack
    isEmpty(stackNum){
        return this.sizes[stackNum] === 0;
    }

    expandNumberOfStacks(){
        // handle increase in number of stacks
        this.numberOfStacks++
        // handle data about how many elements are in the stack
        this.sizes.push(0);
        // handle increase in values capacity
        let newStack = new Array(this.stackCapacity)
        console.log('new stack', newStack)
        this.values.concat(newStack)
    }

    // pop as if there is only one stack
    pop(stackNum=this.sizes.length-1){
        this.sizes[stackNum]--
        this.values[this.indexOfTop(stackNum)] = 0;
    }

    // push as if there is only one stack
    // either the stack is already full or it can handle more elements
    // if the stack is already full and the stack is the last stack
        // -> invoke expandNumberOfStacks
    push(value){
        console.log('value', value)

        // push into the last stack
        let stackNum = this.numberOfStacks
        console.log('stackNum', stackNum)
        
        if (this.isFull(stackNum)){
        // expand number of stacks if the stack is already full
            console.log('isFull...')
            this.expandNumberOfStacks()
            stackNum++
        }
        this.sizes[stackNum]++
        this.values[this.indexOfTop(stackNum)] = value;
    }
}

// let sos = new SetOfStacks(1,3)
let sos = new SetOfStacks(1,3)
console.log(sos)
// console.log(sos)
// console.log(sos.isEmpty(1)) // true
// console.log(sos.isFull(1)) // true
// console.log(sos)
sos.push(1)
// console.log(sos)