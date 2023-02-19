
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
        this.stacksInSet = 1;
        this.elementsPerSubStack = new Array(this.stacksInSet).fill(0);
    }

    actualNumberOfElements(){

        return this.elementsInSetOfStacks.length
        // let actualNumberOfElements = 0;
        // let x = 0;
        // while (x < this.elementsPerSubStack.length){
        //     actualNumberOfElements += this.elementsPerSubStack[x];
        //     x++
        // }
        // return actualNumberOfElements;
    }

    totalCapacity(){
        return this.stacksInSet * this.stackCapacity
    }

    // info about the values in the stack
    
    isFull(stackNum){
        return this.elementsPerSubStack[stackNum] === this.stackCapacity
    }

    // info about the values in the stack
    isEmpty(){
        return this.actualNumberOfElements() === 0;
    }
    
    getLastStack(){
        return this.stacksInSet - 1
    }

    getTopElement(){
        return this.elementsInSetOfStacks[this.elementsInSetOfStacks.length - 1]
    }

    getStackOffset(stackNum){
        let offset = (stackNum * this.stackCapacity) + this.elementsPerSubStack[stackNum]
        return offset;
    }

    createNewStack(value){
        this.stacksInSet++;
        let newStack = [value];
        this.elementsInSetOfStacks = this.elementsInSetOfStacks.concat(newStack)
        this.elementsPerSubStack.push(1)
    }

    pushToStack(stackNum, value){
        let offset = this.getStackOffset(stackNum);
        this.elementsInSetOfStacks[offset] = value;
        this.elementsPerSubStack[stackNum]++
    }

    push(value){
        if (value === null){ throw new Error('Cannot push a null value to the stack.')}
        let lastStack = this.getLastStack()
        if (lastStack !== null && !this.isFull(lastStack)){
            // push to existing stack
            this.pushToStack(lastStack, value)
        } else {
            // create new stack
            this.createNewStack(value)
        }
    }

    pop(){
        if (this.isEmpty()){ throw new Error('Error: The stack is empty and therefore the pop operation implies stack underflow.')}
        // let value = this.getTopElement()
        const value = this.elementsInSetOfStacks.pop()
        this.elementsPerSubStack[this.stacksInSet-1]--;
        // remove empty stacks
        if (this.elementsPerSubStack[this.stacksInSet - 1] === 0 && this.stacksInSet > 1){

            this.elementsPerSubStack.pop()
            this.stacksInSet--
        } 
        // else if (this.elementsPerSubStack[this.stacksInSet - 1] === 0 && this.stacksInSet === 1){
        // //     this.elementsInSetOfStacks.pop()
        // //     this.stacksInSet--
        // // }
        return value
    }

}

// let sos = new SetOfStacks(1,3)
let sos = new SetOfStacks(2)
// console.log('last stack',sos.getLastStack())
sos.push(11)
sos.push(23)
sos.push(56)
sos.push(68)
sos.push(72)  // 5 elements in 
sos.pop()
sos.pop()
sos.pop()
sos.pop()
console.log(sos) // only should see 11

/* 
too many elements are being popped
elementsPerSubStack is not decrementing as expected

*/


// remove(sos)
// console.log(sos)
// console.log(sos.isEmpty()) // true
// console.log(sos.isFull()) // false
// console.log('/// total capacity...', sos.totalCapacity())
// sos.push(23)
// console.log('/// actual number of elements...', sos.actualNumberOfElements())
// sos.push(34)
// console.log(sos.actualNumberOfElements())
// console.log(sos.stackInsertionIndex()) // 1
// console.log('/// sos', sos)
// sos.push(45) 
// sos.push(64)
// sos.push(99)
// console.log(sos)

// console.log(sos)
// console.log(sos.actualNumberOfElements())

// console.log(sos)
// console.log('/// sos', sos)
// console.log(sos)
// console.log(sos.isEmpty(1)) // true
// console.log(sos.isFull(1)) // true
// console.log(sos)
// sos.push(1)
// console.log(sos)
