/**
 * 20. Valid Parentheses
Easy
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 * input:a string
 * output: a boolean 
 * the boolean states whether or not the function's input has balanced parentheses
 * use a stack 
 * a stack expands from the end and contracts from the end
 * in short the function pushes symbols onto the stack
 * if the stack has a matching element, pop the element off the stack
 * if the stack does not have a matching element, add the element to the stack
 * if, at the end of the loop over the input, the stack is not empty, return false
 * 
 * first i will do an implementation with an array
 * 
 *  x = "[]"
 *  stack = [ "[" ]
 *  currentSumbole = "]"
 * 
 * 
 *  */ 
const validParentheses = (string) => {
    
    let stack = [];
    
    for (let x = 0; x < string.length; x++){
        let symbol = string[x]
        // if the symbol is in the stack already,
        // then remove the instance of the symbol from the stack       
        if (symbol === "(" || symbol === "[" || symbol === "{"){
            stack.push(symbol)
        } else if  (symbol === ")" && stack.length !== 0 && stack[stack.length - 1] === "("){
            stack.pop()
        } else if (symbol === "]" && stack.length !== 0 && stack[stack.length - 1]=== "["){
            stack.pop()
        } else if (symbol === "}" && stack.length !== 0 && stack[stack.length - 1]=== "{"){
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}

console.log(validParentheses("[]")) // true
console.log(validParentheses("()")) // true
console.log(validParentheses("()[]{}")) // true
console.log(validParentheses("(]")) // false 