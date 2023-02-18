/* 

    Successfully tested the class 2/5/23
    date created: 2/4/23

    |--------------------------|
    | FixedMultiStack          |
    |--------------------------|
    |* numberOfProperties === 4|
    |- stackCapacity           |
    |- numberOfStacks          |
    |- values                  |
    |- sizes                   |
    |--------------------------|
    |* numberOfMethods === 6   |
    |- isFull(stackNum)        | x
    |- indexOfTop(stackNum)    | x
    |- push(stackNum, value)   | x
    |- isEmpty(stackNum)       | x
    |- peek(stackNum)          | x
    |- pop(stackNum)           | x
    |--------------------------|


*/

class FixedMultiStack{
    constructor(stackCapacity, numberOfStacks){
        // maintain the invariant (or, enforce the policy) a fixed multi stack object 
        // must have stackCapacity and numberOfStacks passed as parameters at the time 
        // of class object instantiation
        if (stackCapacity === undefined || numberOfStacks === undefined){
            throw new Error('Error: stack capacity and number of stacks must be defined when instantiating the class.')
        }
        // total array size is defined by the number of stacks and the number of elements in each stack 
        const size = stackCapacity * numberOfStacks;
        this.stackCapacity = stackCapacity
        this.numberOfStacks = numberOfStacks
        
        this.values = new Array(size).fill(0)
        // sizes keeps track of the number of elements in a given stack
        // this.sizes[0] returns the number of elements in the 1st stack
        this.sizes = new Array(numberOfStacks).fill(0)
    }

    isFull(stackNum){
        return this.sizes[stackNum] === this.stackCapacity;
    }

    indexOfTop(stackNum){
        let offset = stackNum * this.stackCapacity;
        let size = this.sizes[stackNum];
        return offset + size - 1;
    }

    push(stackNum, value){
        // make sure there is space for the value
        if (this.isFull(stackNum)){ throw new Error('Error: stack is full')}
        this.sizes[stackNum]++;
        this.values[this.indexOfTop(stackNum)] = value;
    }

    isEmpty(stackNum){
        return this.sizes[stackNum] === 0;
    }

    peek(stackNum){
        if (this.isEmpty(stackNum)){
            throw new Error('Error: stack underflow')
        }
        return this.values[this.indexOfTop(stackNum)]
    }

    pop(stackNum){
        if (this.isEmpty(stackNum)){ 
            throw new Error('Error: stack underflow');
        }
        let value = this.indexOfTop(stackNum);
        this.values[value] = 0; 
        this.sizes[stackNum]--;
        return value;
    }
}

// fixedMultiStack ( stack capacity, number of stacks)
let multiStack = new FixedMultiStack(3,3)

console.log('state 0', multiStack)
multiStack.push(0, 0)
console.log('state 1', multiStack)
multiStack.push(0, 1)
console.log('state 2', multiStack)
multiStack.push(0, 1)
console.log('state 3', multiStack)
multiStack.push(1, 2)
console.log('state 4', multiStack)
multiStack.pop(1)
console.log('state 5', multiStack)
multiStack.push(1,2)
multiStack.push(1,3)
multiStack.push(1,5)
multiStack.push(2,8)
console.log('state 6', multiStack)
console.log('stack 2 is empty?', multiStack.isEmpty(2)) // expect : false | actual : false 
console.log('stack 2 is the right value?', 8 === multiStack.peek(2)) // expect : true | actual : true
console.log('stack 0 is full?', multiStack.isFull(0)) // expect : true | actual : true  
console.log('state 7', multiStack )
console.log('top of stack 0 is 1?', multiStack.peek(0) === 1) // expect : true | actual :  true:
// multiStack.push(0,21)
// console.log(multiStack)