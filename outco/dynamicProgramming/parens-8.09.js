/* 
Parens

Implement an algorithm to print all valid (i.e., 
properly opened and closer) combinations of n parentheses.

Successfully tested the function 03/23/2023.

Example
nInt = 1
Output: ['()']

nInt = 2
output: ['(())', '()()']
*/

const generateParens = ( nInt ) => {

    let arr = new Array(nInt * 2).fill('')
    let listArr = []
    const addParen = (leftRemInt, rightRemInt, arr, indexInt) => {

            if (leftRemInt < 0 || rightRemInt < leftRemInt){
                return
            }

            if (leftRemInt === 0 && rightRemInt === 0){
                listArr.push(arr.join(''))
                return
            } 

            arr[indexInt] = '('
            addParen(leftRemInt - 1, rightRemInt, arr, indexInt + 1)
            arr[indexInt] = ')'
            addParen(leftRemInt, rightRemInt - 1, arr, indexInt+1)
    }

    addParen(nInt, nInt, arr, 0)
    return listArr
}

/* TESTS */

const input2 = 2;
const test2 = generateParens(input2);
console.log('Test 2: ', test2)

const input3 = 3;
const test3 = generateParens(input3);
console.log('Test 3: ', test3)