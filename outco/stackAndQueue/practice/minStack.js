/* 
Min Stack Leetcode function

Successfully tested the functions 03/20/2023.

*/

var MinStack = function() {
    this.minStack = []
    this.allStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.allStack.push(val)
    let currentMinInt = this.minStack[this.minStack.length -1]
    if (!this.minStack.length || val <= currentMinInt){
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let valueInt = this.allStack.pop()
    let currentMinInt = this.minStack[this.minStack.length - 1]
    if (valueInt === currentMinInt){
        this.minStack.pop()
    }
    return valueInt
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.allStack[this.allStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


