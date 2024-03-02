/* 
Smallest Difference
CTCI 16.06

Successfully tested the function on July 12, 2023.

Given two arrays of integers, compute the pair of values (one value in each array)
with the smallest (non-negative) difference. Return the difference.

inputArr1 = [1, 3, 5, 11, 2]
inputArr2 = [23, 127, 235, 19, 8]
Output: 3
Smallest difference is 3. (11 - 8)

inputArr3 = [1, 10, 100]
inputArr4 = [5, 50, 101]
Output: 1
*/

const smallestDifference = (arr1, arr2) => {
    let iInt = 0;
    let jInt = 0;
    let smallestDifferenceInt = Infinity;
    while (iInt < arr1.length){
        jInt = 0;
        let int1 = arr1[iInt];
        while (jInt < arr2.length){
            let int2 = arr2[jInt];
            let diff1Int = int1 - int2;
            let diff2Int = int2 - int1;
            if (diff1Int > 0 && diff1Int < smallestDifferenceInt){
                smallestDifferenceInt = diff1Int;
            }
            if (diff2Int > 0 && diff2Int < smallestDifferenceInt){
                smallestDifferenceInt = diff2Int;
            }
            jInt++;
        }
        iInt++;
    }
    return smallestDifferenceInt;
}


/* Test */
const inputArr1 = [1, 3, 5, 11, 2];
const inputArr2 = [23, 127, 235, 19, 8];
const int1 = smallestDifference(inputArr1, inputArr2);
const inputArr3 = [1, 10, 100];
const inputArr4 = [5, 50, 101];
const int2 = smallestDifference(inputArr3, inputArr4);
console.log('Result 1:', int1)
console.log('Result 2:', int2)
/* Test results 
Result 1: 3
Result 2: 1
*/