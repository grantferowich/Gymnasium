/* 
Valid Parentheses

Engineered June 6, 2023.

input: "[]"
output: true

input: "{[]}"
output: true

*/

const isValidParentheses = (str) => {
    let parenthesesMap = new Map();
    parenthesesMap.set(']', '[')
    parenthesesMap.set(')', '(')
    parenthesesMap.set("}","{");
    
    let stackArr = []
    let xInt = 0
    while (xInt < str.length){
        let parStr = str[xInt];

        // only opening parens are pushed to the stack
        if (!parenthesesMap.has(parStr)){
            stackArr.push(parStr);
            console.log('xInt: ', xInt)
            console.log('stackArr: ', stackArr)
            // if the top of the stack is an opening paren
            // and the current char is an opening paren
            // pop the stack 
            console.log('parenthesesMap.get(parStr):', parenthesesMap.get(parStr))
            console.log('stackArr[stackArr.length - 1] === parenthesesMap.get(parStr)', stackArr[stackArr.length - 1] === parenthesesMap.get(parStr))
        } else if (stackArr[stackArr.length - 1] === parenthesesMap.get(parStr)) {
            console.log('xInt: ', xInt)
            console.log('parenthesesMap.get(parStr):', parenthesesMap.get(parStr))
            console.log('stackArr[stackArr.length - 1] === parenthesesMap.get(parStr)', stackArr[stackArr.length - 1] === parenthesesMap.get(parStr))
            let ele = stackArr.pop();
            console.log('ele', ele)
        } else {
            return false;
        }
        xInt++
    }

    return stackArr.length === 0
}

/* Tests */

const str1 = '[]'
// const str2 = '(()'

const result1ToF = isValidParentheses(str1);
// const result2ToF = isValidParentheses(str2);

console.log(`Result 1: ${result1ToF}`)
// console.log(`Result 2: ${result2ToF}`)

/* Test results 

Result 1: true
Result 2: false

*/