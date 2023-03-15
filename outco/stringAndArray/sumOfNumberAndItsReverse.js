/* 
Sum of Number and Its Reverse

Successfully tested the function locally and on Leetcode 03/15/2023.

Medium 

Given a non-negative integer num, return true if 
num can be expressed as the sum of any non-negative
integer and its reverse, or false otherwise.

Example 1:

Input: num = 443
Output: true
Explanation: 172 + 271 = 443 so we return true.


Count up from 1 to num
if num + num.reversed == num

Complexity analysis
Time: O(N)
Space: O(1)
*/

// takes in a number, returns the number reversed
const reverseNumber = (numberInt) =>{
    let numberArr = numberInt.toString().split('');
    return parseInt(numberArr.reverse().join(''));
}

const sumOfNumberAndItsReverse = (numberInt) => {
    if (numberInt < 0){
        return false;
    }

    if (numberInt === 0){
        return true;
    }
    
    // only check from n/2 to n, instead of 1 to n
    let x = Math.floor(numberInt/2)
    while (x < numberInt){
        const reversed = reverseNumber(x)
        if (x + reversed === numberInt){
            return true;
        }
        x++
    }
    return false;
}

/* TESTS */
let test1 = reverseNumber(54)
console.log('Test 1:', test1)
// so, 54, would return 45

let test2 = reverseNumber(140)
console.log('Test 2:', test2)
// 140 would return 041, which is 41 as an integer 

let test3 = sumOfNumberAndItsReverse(443)
console.log('Test 3:', test3)
// true

let test4 = sumOfNumberAndItsReverse(63)
console.log('Test 4:', test4)
// false

let test5 = sumOfNumberAndItsReverse(181)
console.log('Test 5:', test5)
// true

