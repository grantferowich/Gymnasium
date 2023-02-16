/* 

    Flexible Multi Stack
    date created: 

    |--------------------------|
    | FlexibleMultiStack       |
    |--------------------------|
    |* numberOfProperties === 4|
    |- stackCapacity           |
    |- numberOfStacks          |
    |- values                  |
    |- sizes                   |
    |--------------------------|
    |* numberOfMethods === 6   |
    |- StackInfo
    |   - isWithinStackCapacity(x)
    |   - lastCapacityIndex()
    |   - lastElementIndex()
    |   - isFull()
        - isEmpty
    | 
    |- isFull(stackNum)        | x
    |- indexOfTop(stackNum)    | x
    |- push(stackNum, value)   | x
    |- isEmpty(stackNum)       | x
    |- peek(stackNum)          | x
    |- pop(stackNum)           | x
    |--------------------------|

*/

class StackInfo{
    constructor(start, capacity){
        // start is the starting index of the specific stack
        this.start = start;
        // capacity is the per-stack capacity
        this.capacity = capacity;
    }

    isWithinStackCapacity(index){
        if (index < 0 || index >= values.length){
            return false;
        }
        // if index 
        let contiguousIndex = index < start ? index + values.length : index;
        let end = this.start + this.capacity;
        return start <= contiguousIndex && contiguousIndex < end
    }

    lastCapacityIndex(){
        return adjustIndex(this.start + this.capacity - 1)
    }

    lastElementIndex(){
        return adjustIndex(this.start + this.size - 1)
    }

    isFull(){
        return this.size === this.capacity;
    }

    isEmpty(){
        return this.size === 0;
    }
}
class MultiStack{
    constructor(stackCapacity, numberOfStacks){
        this.info = new Array(numberOfStacks)
        for (let x = 0; x < numberOfStacks; x++){
            this.info[x] = new StackInfo(stackCapacity * x, stackCapacity)
        }
        this.values =  new Array(numberOfStacks * stackCapacity)
    }


}


class MultiStack{
    constructor(stackCapacity, numberOfStacks){
        this.info = new StackInfo(numberOfStacks);
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