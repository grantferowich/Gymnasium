/* 

NUMBER OF ISLANDS
Medium

Engineered on Friday, May 26, 2023.
Successfully tested the function on Friday, May 26, 2023.


Time complexity: O(MN)
Space complexity: O(MN)
*/

// input:

// [['1','1','1','0'],
//  ['1','1','1','0']
//  ['0','0','0','0']
//  ['0','1','1','0']
// ]

// output: 2

// increment number of islands by 1 
// via presence of '1's

// easy double for loop traversing the grid
// start traversal once a 1 is found to 
// get all the connected islands

const numberOfIslands = (arr = []) => {
    
    if (arr.length === 0){
        return 0;
    }

    let xInt = 0;
    let yInt = 0;
    let rowsInt = arr.length;
    let colsInt = arr[0].length;
    let numberOfIslandsInt = 0;
    let visitedMap = new Map();

    const traverse = (iInt, jInt, visitedMap) => {
        // out of bounds
        if (iInt < 0 || jInt < 0 || iInt >= rowsInt || jInt >= colsInt ){
            return 
        }

        let currentValueStr = arr[iInt][jInt];
        let ijKeyStr = `${iInt}_${jInt}`;
    
        if (visitedMap.has(ijKeyStr) || currentValueStr === '0'){
            return 
        }
        visitedMap.set(ijKeyStr, true);
        traverse(iInt + 1, jInt, visitedMap);
        traverse(iInt - 1, jInt, visitedMap);
        traverse(iInt, jInt - 1, visitedMap);
        traverse(iInt, jInt + 1, visitedMap);
    }
    
    while (xInt < rowsInt){
        yInt = 0;
        while (yInt < colsInt){
            let valStr = arr[xInt][yInt];
            let keyStr = `${xInt}_${yInt}`;
            if (valStr === '1' && !visitedMap.has(keyStr)){
                numberOfIslandsInt++
                traverse(xInt, yInt, visitedMap)
            }
            yInt++
        }
        xInt++
    }

    return numberOfIslandsInt;
}



const input = undefined 
const input0 = []

const input1Arr = [['1','1','1','0'],
                   ['1','1','1','0'],
                   ['0','0','0','0'],
                   ['0','1','1','0']]
                
const input2Arr = [['1','0','0','1'],
                   ['0','0','0','0'],
                   ['0','0','0','0'],
                   ['1','0','0','1']]

const input3Arr = [['1','1','1','0'],
                   ['1','1','1','0']
                   ['0','0','0','0']
                   ['0','1','1','0']]
                
const result = numberOfIslands(input)
console.log('Result: ', result) // 0

const result0 = numberOfIslands(input0)
console.log('Result 0: ', result0) // 0

const result1Int = numberOfIslands(input1Arr)
console.log('Result 1: ', result1Int) // 2 

const result2Int = numberOfIslands(input2Arr)
console.log('Result 2: ', result2Int) // 4

/* Test results

Result:  0
Result 0:  0
Result 1:  2
Result 2:  4

*/
