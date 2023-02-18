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
        // find the index within the various stacks 
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
        this.totalCapacity = stackCapacity*numberOfStacks
    }

    numberOfElements(){
        let elements = 0;
        for (let x = 0; x < this.info.length; x++){
            elements += this.sizes[x]
        }
        return elements
    }

    allStacksAreFull(){
        console.log('this.totalCapacity'+this.totalCapacity)
        return this.numberOfElements() === this.totalCapacity;
    }

    adjustIndex(index){
        if (index >= this.values.length){
            return index % this.length - 1;
        }
        return index
    }

    nextIndex(index){
        return this.adjustIndex(index+1);
    }
    
    previousIndex(index){
        return this.adjustIndex(index - 1);
    }

    /* Shift items in stack over by one element. If we have 
	 * available capacity, then we'll end up shrinking the stack 
	 * by one element. If we don't have available capacity, then
	 * we'll need to shift the next stack over too. */
    shift(stackNum){
        
        console.log('//Shifting + '+stackNum)
        let stack = info[stackNum];
        if (stack.size >= stack.capacity){
            let nextStack = (stackNum + 1) % this.info.length;
            this.shift(nextStack);
            stack.capacity++;
        }

        let index = stack.lastCapacityIndex();
        while (stack.isWithinStackCapacity(index)){
            // shift ele at index 2 to index 1..
            values[index] = values[this.previousIndex(index)]
            index = this.previousIndex(index)
        }

        values[stack.start] = 0
        stack.start = this.nextIndex(stack.start)
        stack.capacity--
    }

    expand(stackNum){
        this.shift((stackNum + 1) % this.info.length)
        this.info[stackNum].capacity++
    }
    // push inserts value onto the relevant stuck num
    // push relies on shift
    push(stackNum, value){
        console.log('/// Pushing stack' + stackNum + ":" + value);
        if (this.allStacksAreFull){ throw new Error('Error: Stack overflow.')}
        const s = this.info[stackNum];
        if (s.isFull){
            this.expand(stackNum)
        }
        stack.size++;
        values[stack.lastElementIndex()] = value;
    }

    pop(stackNum){
        console.log('/// popping stack ' + stackNum)
        let s = this.info[stackNum]
    }

}


/* TESTS */

let s = new MultiStack(3,3)
// console.log(s)
// console.log(s.numberOfElements())
// console.log(s.allStacksAreFull()) // false
console.log(s.push(0, 1))

