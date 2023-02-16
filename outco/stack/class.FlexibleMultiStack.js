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
        this.values =  new Array(numberOfStacks * stackCapacity);
        this.sizes = new Array(numberOfStacks).fill(0)
    }

    numberOfElements(){
        let elements = 0;
        for (let x = 0; x < this.info.length; x++){
            elements += this.sizes[x]
        }
        return elements
    }

}


/* TESTS */

let s = new MultiStack(3,3)
console.log(s)
console.log(s.numberOfElements())