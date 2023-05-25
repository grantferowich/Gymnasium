/* 
150. Evaluate Reverse Polish Notation

https://leetcode.com/problems/evaluate-reverse-polish-notation/

Attempted on May 24, 2023.
Untested as of May 24, 2023.

Medium
5.8K
882
Companies
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

Procedure
1. Iterate through the array
    2. if operand (number) -> push to stack
    3. if operator (+/-*)
        4. pop the last two operands
        5. calculate using current operator
        6. push result to stack
7. return the top of the stack (.pop())
*/

const evaluateReversePolishNotation = (arr) => {
    let operatorsStr = '+-*/'
    let xInt = 0;
    let stackArr = [];

    while (xInt < arr.length){
        let elementAny = arr[xInt]
        let resultInt = 0;

        if (!operatorsStr.includes(elementAny)){
            stackArr.push(parseInt(elementAny))
        } else {
            let operatorInt1 = stackArr.pop();
            let operatorInt2 = stackArr.pop();

            if (elementAny === "+"){
                resultInt = parseInt(operatorInt2) + parseInt(operatorInt1);
            }

            if (elementAny === "/"){
                resultInt = parseInt(parseInt(operatorInt2) / parseInt(operatorInt1));
            }    

            if (elementAny === "-"){
                resultInt = parseInt(operatorInt2) - parseInt(operatorInt1);
            }

            if (elementAny === "*"){
                resultInt = parseInt(operatorInt1) * parseInt(operatorInt2);
            }
            // console.log(resultInt)
            stackArr.push(resultInt);
        }
            xInt++;
    } 
    // console.log(stackArr)
    return stackArr.pop()
}
    


/* Tests */
const arr1 = ["4","13","5","/","+"]
const arr2 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

const resultInt1 = evaluateReversePolishNotation(arr1);
const resultInt2 = evaluateReversePolishNotation(arr2);

console.log(`result 1: ${resultInt1}`);
console.log(`result 2: ${resultInt2}`);

/* Test results

result 1: 6
result 2: 22

*/