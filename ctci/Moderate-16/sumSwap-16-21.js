/* 
Sum Swap

CTCI 16.21

Successfully tested 1 test case on July 20, 2023. 

Given two arrays of integers, find a pair
of values (one value from each array) that you 
can swap to give the two arrays the same sum.

examples
1. arr1 = [4,1,2,1,1,2] arr2 = [3,6,3,3]
Output: [1, 3]

sum1 = 11
sum2 = 15
-> If sum1 equals sum2, return -1. 
If the sum2 is greater than sum1, then arr2 becomes largerArr and arr1 becomes smaller arr.
    - Else, arr1 is largerArr and arr2 is smallerArr. 
-> The coords must sum to 4. (This is the differenceInt.)
2 loops over both arrays. 
Can you find one number from each array whose sum equals the differenceInt?
    if the sum of the two numbers is equal to the differenceInt
    AND the number from the larger arr is greater than the number from the smaller arr
    return the two elements as a tuple. 



*/

const sumSwap = (arr1, arr2) => {

    let sumInt1 = 0;
    let sumInt2 = 0;
    let xInt = 0;
    let differenceInt = 0;
    let largerArr;
    let smallerArr;
    while (xInt < arr1.length){
        sumInt1 += arr1[xInt];
        xInt++;
    }

    xInt = 0;
    while (xInt < arr2.length){
        sumInt2 += arr2[xInt];
        xInt++;
    }

    if (sumInt1 === sumInt2){
        return [];
    }

    if (sumInt1 > sumInt2){
        differenceInt = sumInt1 - sumInt2;
        largerArr = arr1
        smallerArr = arr2
    }   

    if (sumInt2 > sumInt1){;
        differenceInt = sumInt2 - sumInt1
        largerArr = arr2;
        smallerArr = arr1;
    }
    let iInt = 0;
    let jInt = 0;
    while (iInt < largerArr.length){
        jInt = 0;
        let largerInt = largerArr[iInt];
        while (jInt < largerArr.length){
            let smallerInt = smallerArr[jInt];
            if (largerInt > smallerInt && largerInt + smallerInt === differenceInt){
                return [smallerInt, largerInt]
            }
            jInt++  
        }
        iInt++
    }
    return -1;
}

/* Tests */
const arr1 = [4,1,2,1,1,2];
const arr2 = [3,6,3,3];

const resultTuple1 = sumSwap(arr1, arr2);
console.log('Result 1: ', resultTuple1)

/* Test results */