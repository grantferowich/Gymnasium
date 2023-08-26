/* 40. Combination Sum II
Medium
9.3K
233
Companies
Given a collection of candidate numbers (candidates) 
and a target number (target), find all unique combinations
in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
] 

        start buildArr = 0, currentSum = 0
                /               \
              /                  \
            /                     \
    
*/
const combinationSumII = (arr, intX) => {
    const outputMatrix = new Set();

    const generateCombination = (outputMatrix, currentArr, depthInt, currentSumInt, targetInt) => {
        if (currentSumInt === targetInt ){
            console.log('currentArr ', currentArr)
            console.log('Current Sum int:', currentSumInt)
            
            currentArr.sort();
            let newArr = currentArr.join(',');
            outputMatrix.add(newArr);
            return
        }
        if (currentSumInt > targetInt || depthInt >= arr.length){
            return;
        }
        let xInt = depthInt;
        while (xInt < arr.length){
            let valueInt = arr[xInt];
            currentArr.push(valueInt);
            currentSumInt += valueInt;
            // remove element at the front of the input arr
            generateCombination(outputMatrix, currentArr, xInt + 1, currentSumInt, targetInt);
            // insert elemenet to the front of the input arr
            currentArr.pop();
            currentSumInt -= valueInt;
            xInt++;
        }
        
    }
    generateCombination(outputMatrix, [], 0, 0, intX);
    const resultMatrix = Array.from(outputMatrix, str => str.split(",").map(Number));
    return resultMatrix;
}

/* Tests */
const arr1 = [10,1,2,7,6,1,5];
const int1 = 8;

const arr2 = [2,5,2,1,2];
const int2 = 5;

const resultMatrix1 = combinationSumII(arr1, int1);
const resultMatrix2 = combinationSumII(arr2, int2);
console.log("Result 1: ", resultMatrix1);
console.log("Result 2: ", resultMatrix2);

/* Test results */