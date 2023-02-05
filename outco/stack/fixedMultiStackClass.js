/* 

    date created: 2/4/23
    
    --------------------------|
    | FixedMultiStack         |
    --------------------------|
    |- stackCapacity          |
    |- numberOfStacks         |
    |- values                 |
    |- sizes                  |
    |-------------------------|
    |- isFull(stackNum)       |
    |- indexOfTop(stackNum)   |   
    |- push(stackNum, value)  |
    |- isEmpty(stackNum)      |
    |- peek(stackNum)         |
    |- pop(stackNum)          |
    --------------------------




*/




class FixedMultiStack{
    constructor(stackCapacity, numberOfStacks, values){
        this.stackCapacity = stackCapacity === undefined ? null : stackCapacity;
        this.numberOfStacks = numberOfStacks === undefined ? null : numberOfStacks;
        this.values = values === undefined ? null : values;
        this.sizes = new Array(numberOfStacks);
    }

    isFull(stackNum){
        return this.sizes[stackNum].length === this.stackCapacity;
    }

    indexOfTop(stackNum){
        let offset = stackNum * this.stackCapacity;
        let size = this.sizes[stackNum];
        return offset + size - 1;
    }

    push(stackNum, value){
        // make sure there is space for the value
        if (this.isFull(stackNum)){ return 'Error: stack is full'}
        this.sizes[stackNum]++;
        this.values[this.indexOfTop(stackNum)] = value;
    }

    isEmpty(stackNum){
        return this.sizes[stackNum] === 0
    }

    peek(stackNum){
        if (this.isEmpty(stackNum)){
            return 'Error: stack is empty'
        }
        return this.values[this.indexOfTop(stackNum)]
    }

    pop(stackNum){
        if (this.isEmpty(stackNum)){ return 'Error: stack underflow'}
        let value = this.indexOfTop(stackNum);
        this.values[this.indexOfTop] = 0; 
        this.sizes[stackNum]--;
        return value;
    }
}