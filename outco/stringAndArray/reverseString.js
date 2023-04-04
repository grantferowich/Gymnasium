/* 
344. Reverse String

Easy

Successfully tested the Reverse String function 04/04/2023.

Write a function that reverses a string. 
The input string is given as an array of characters s.

You must do this by modifying the input 
array in-place with O(1) extra memory.

input 1: 
['h', 'e', 'l', 'l', 'o']
output 1:
['o', 'l', 'l', 'e', 'h']

*/

const reverseString = (arr) => {
    let leftPtrInt = 0;
    let rightPtrInt = arr.length - 1;
    while (leftPtrInt < rightPtrInt){
        let leftChar = arr[leftPtrInt];
        let rightChar = arr[rightPtrInt];
        arr[leftPtrInt] = rightChar;
        arr[rightPtrInt] = leftChar;
        leftPtrInt++;
        rightPtrInt--;
    }
    return arr
}

/* TESTS */
const arr1 = ['h','e','l','l','o']
const result1 = reverseString(arr1)
console.log(`Result 1: ${result1}`)

const arr2 = ['w', 'a', 'k', 'e', 'f', 'o', 'r', 'e', 's', 't']
const result2 = reverseString(arr2)
console.log(`Result 2: ${result2}`)

const arr3 = ['w', 'a', 'k', 'e',' ', 'f', 'o', 'r', 'e', 's', 't']
const result3 = reverseString(arr3)
console.log(`Result 3: ${result3}`)

/* TEST RESULTS 

Result 1: o,l,l,e,h
Result 2: t,s,e,r,o,f,e,k,a,w
Result 3: t,s,e,r,o,f, ,e,k,a,w

*/