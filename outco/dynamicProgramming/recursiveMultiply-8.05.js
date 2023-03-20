/* 
Recursive Multiply

CTCI 8.5

Write a recursive function to multiply two positive 
integers without using the * operator. You can use addition,
substraction, and bit shifting, but you should minimize the number 
of those operatiosn.

Example cases
number1 = 2, number2 = 3
output 6
*/

const recursiveMultiply = (number1Int = 0, number2Int = 0) => {
    if (number1Int === 0 || number2Int === 0){
        return 0
    }
    let sum = 0
    const multiply = (depth) => {
        if (depth >= number2Int){
            return 
        }
        sum += number1Int
        multiply(depth+1)
    }
    multiply(0, 0)
    return sum
}

/* TESTS */ 

const result0 = recursiveMultiply(null, null);
console.log('Test result 0: ', result0 )
// 0 ✓ 

const result1 = recursiveMultiply(undefined, undefined);
console.log('Test result 1: ', result1 )
// 0 ✓ 

const num1Int = 2;
const num2Int = 3;
const result2 = recursiveMultiply(num1Int, num2Int);
console.log('Test result 2: ', result2) 
// 6 ✓ 