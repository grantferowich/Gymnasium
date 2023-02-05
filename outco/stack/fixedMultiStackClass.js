
class FixedMultiStack{
    constructor(stackCapacity, numberOfStacks, values){
        this.stackCapacity = stackCapacity === undefined ? null : stackCapacity;
        this.numberOfStacks = numberOfStacks === undefined ? null : numberOfStacks;
        this.values = values === undefined ? null : values;
        this.sizes = new Array(numberOfStacks);
    }

    isFull(stackNum){
        
    }
}