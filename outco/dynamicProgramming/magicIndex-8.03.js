/* 
Magic Index

CTCI 8.03

A magic index in an array A[0...n-1] is defined to be an index
such that A[i] = i. Given a sorted array of distinct integers, 
write a method to find a magic index, if one exists, in array A.

Example cases

input: numsArray = [0]
output: true.
At index 0, the element value is 0.

input: [0,1,2,3,4]
output: true

input: [1,4,6]
output: false
*/

const magicIndex = (numsArray=[]) => {
    if (numsArray.length === 0){
        return false;
    }
    const traverse = (depthInt) => {
        if (depthInt === numsArray.length){
            return false;
        }

        if (depthInt === numsArray[depthInt]){
            return true;
        }

        return traverse(depthInt+1);
    }
    return traverse(0) ? true : false
}

/* TESTS */

const numsArray0 = [0];
const result0 = magicIndex(numsArray0)
console.log('Test result 0: ', result0);
// expect true ✓

const numsArray1 = [0,1,2,3,4];
const result1 = magicIndex(numsArray1)
console.log('Test result 1: ', result1)
// expect true ✓

const numsArray2 = [1,4,6]
const result2 = magicIndex(numsArray2)
console.log('Test result 2: ', result2)
// expect false ✓

const numsArray3 = [1,1,4,6]
const result3 = magicIndex(numsArray3)
console.log('Test result 3: ', result3)
// expect true ✓

const numsArray4 = [1,4,4,6]
const result4 = magicIndex(numsArray4)
console.log('Test result 4: ', result4)
// expect false ✓