// Successfully tested this O(N) function 1/29/23.

const validParenthesesX1 = (string) => {
    
    let stack = [];
    
    for (let x = 0; x < string.length; x++){
        let symbol = string[x];
        // if the symbol is in the stack already,
        // then remove the instance of the symbol from the stack       
        if (symbol === "(" || symbol === "[" || symbol === "{"){
            stack.push(symbol)
        } else if  (symbol === ")" && stack.length !== 0 && stack[stack.length - 1] === "("){
            stack.pop();
        } else if (symbol === "]" && stack.length !== 0 && stack[stack.length - 1]=== "["){
            stack.pop();
        } else if (symbol === "}" && stack.length !== 0 && stack[stack.length - 1]=== "{"){
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0
}

console.log(validParenthesesX1("[]")) // true
console.log(validParenthesesX1("()")) // true
console.log(validParenthesesX1("()[]{}")) // true
console.log(validParenthesesX1("(]")) // false 