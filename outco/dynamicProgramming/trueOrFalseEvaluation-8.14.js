/* 
True or False Evaluation

Given a boolean expression consisting of the symbols 0 (false),
1 (true), & (AND), | (OR), and ^ (XOR), and a desired true or false result
value result, implement a function to count the number of ways of parenthesizing
the expression such that it evaluates to result. The expression should be
fully parenthesized (e.g., (0) ^ (1)) but not extraneously (e.g., (((0)^(1)))).

Input: string, true or false
output: integer
Examples

input 1: "1^0|0|1", false
output 1: 2

input 2: "0&0&0&1^1|0", true
output: 10

*/

const tOrFEvaluation = (str = '', ToF = false) => {
    if (!str && !ToF){
        return 0;
    }
    
}

/* TESTS */

const inputArr1 = [ [0, false], [undefined, false], [null, false], ["1^0|0|1", false], ["0&0&0&1^1|0", true] ]

// Expect: 0, 0, 0, 2, 10
const runTests = (inputArr) => {
    let xInt = 0
    while (xInt < inputArr.length){
        let testInputStr = inputArr1[xInt][0]
        let testInputToF = inputArr1[xInt][0]
        let resultInt = tOrFEvaluation(testInputStr, testInputToF);
        console.log(`Test ${xInt}: ${resultInt}`)
        xInt++
    }
}

return runTests(inputArr1)